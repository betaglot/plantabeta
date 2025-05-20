#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fsPromises = fs_1.default.promises;
const path_1 = __importDefault(require("path"));
const simple_git_1 = __importDefault(require("simple-git"));
const pdfkit_1 = __importDefault(require("pdfkit"));
const highlight_js_1 = __importDefault(require("highlight.js"));
const isbinaryfile_1 = require("isbinaryfile");
const strip_comments_1 = __importDefault(require("strip-comments"));
const prettier_1 = __importDefault(require("prettier"));
const syntax_1 = require("./syntax");
const loadIgnoreConfig_1 = __importDefault(require("./loadIgnoreConfig"));
const universalExcludes_1 = require("./universalExcludes");
const configHandler_1 = require("./configHandler");
function getPrettierParser(extension) {
    const parserOptions = {
        js: "babel",
        jsx: "babel",
        ts: "typescript",
        tsx: "typescript",
        css: "css",
        scss: "scss",
        less: "less",
        html: "html",
        json: "json",
        md: "markdown",
        yaml: "yaml",
        graphql: "graphql",
        vue: "vue",
        angular: "angular",
        xml: "xml",
        java: "java",
        kotlin: "kotlin",
        swift: "swift",
        php: "php",
        ruby: "ruby",
        python: "python",
        perl: "perl",
        shell: "sh",
        dockerfile: "dockerfile",
        ini: "ini",
    };
    return parserOptions[extension] || null;
}
let chalk;
let inquirer;
let ora;
const spinnerPromise = import("ora").then((oraModule) => {
    ora = oraModule.default;
    return ora("Setting everything up...").start();
});
Promise.all([
    import("chalk").then((chalkModule) => chalkModule.default),
    import("inquirer").then((inquirerModule) => inquirerModule.default),
    spinnerPromise,
])
    .then(([chalkModule, inquirerModule, spinner]) => {
    chalk = chalkModule;
    inquirer = inquirerModule;
    spinner.succeed("Setup complete");
    (0, configHandler_1.configQuestions)(main, chalk, inquirer);
})
    .catch((err) => {
    spinnerPromise.then((spinner) => {
        spinner.fail("An error occurred during setup");
    });
    console.error(err);
});
function main(repoPath, useLocalRepo, addLineNumbers, addHighlighting, addPageNumbers, removeComments, removeEmptyLines, onePdfPerFile, outputFileName, outputFolderName, keepRepo) {
    return __awaiter(this, void 0, void 0, function* () {
        const gitP = (0, simple_git_1.default)();
        let tempDir = "./tempRepo";
        let doc = null;
        if (!onePdfPerFile) {
            doc = new pdfkit_1.default({
                bufferPages: true,
                autoFirstPage: false,
            });
            doc.pipe(fs_1.default.createWriteStream(outputFileName));
            doc.addPage();
        }
        let fileCount = 0;
        let ignoreConfig = null;
        const spinner = ora(chalk.blueBright("Setting everything up...")).start();
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        try {
            if (useLocalRepo) {
                tempDir = repoPath;
            }
            else {
                spinner.start(chalk.blueBright("Cloning repository..."));
                yield gitP.clone(repoPath, tempDir);
                spinner.succeed(chalk.greenBright("Repository cloned successfully"));
            }
            spinner.start(chalk.blueBright("Processing files..."));
            ignoreConfig = yield (0, loadIgnoreConfig_1.default)(tempDir);
            yield appendFilesToPdf(tempDir, removeComments);
            if (!onePdfPerFile) {
                if (doc) {
                    const pages = doc.bufferedPageRange();
                    for (let i = 0; i < pages.count; i++) {
                        doc.switchToPage(i);
                        if (addPageNumbers) {
                            const oldBottomMargin = doc.page.margins.bottom;
                            doc.page.margins.bottom = 0;
                            doc.text(`Page: ${i + 1} of ${pages.count}`, 0, doc.page.height - oldBottomMargin / 2, {
                                align: "center",
                            });
                            doc.page.margins.bottom = oldBottomMargin;
                        }
                    }
                    doc.end();
                }
            }
            spinner.succeed(chalk.greenBright(`${onePdfPerFile ? "PDFs" : "PDF"} created with ${fileCount} files processed.`));
            if (!keepRepo && !useLocalRepo) {
                yield delay(3000);
                fs_1.default.rmSync(tempDir, { recursive: true, force: true });
                spinner.succeed(chalk.greenBright("Temporary repository has been deleted."));
            }
        }
        catch (err) {
            spinner.fail(chalk.redBright("An error occurred"));
            console.error(err);
        }
        function appendFilesToPdf(directory, removeComments = false) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                const files = yield fsPromises.readdir(directory);
                for (const file of files) {
                    const filePath = path_1.default.join(directory, file);
                    const stat = yield fsPromises.stat(filePath);
                    const excludedNames = universalExcludes_1.universalExcludedNames;
                    const excludedExtensions = universalExcludes_1.universalExcludedExtensions;
                    if (ignoreConfig === null || ignoreConfig === void 0 ? void 0 : ignoreConfig.ignoredFiles)
                        excludedNames.push(...ignoreConfig.ignoredFiles);
                    if (ignoreConfig === null || ignoreConfig === void 0 ? void 0 : ignoreConfig.ignoredExtensions)
                        excludedExtensions.push(...ignoreConfig.ignoredExtensions);
                    // Check if file or directory should be excluded
                    if (excludedNames.includes(path_1.default.basename(filePath)) ||
                        excludedExtensions.includes(path_1.default.extname(filePath))) {
                        continue;
                    }
                    if (stat.isFile()) {
                        fileCount++;
                        spinner.text = chalk.blueBright(`Processing files... (${fileCount} processed)`);
                        const fileName = path_1.default.relative(tempDir, filePath);
                        if (onePdfPerFile) {
                            doc = new pdfkit_1.default({
                                bufferPages: true,
                                autoFirstPage: false,
                            });
                            const pdfFileName = path_1.default
                                .join(outputFolderName, fileName.replace(path_1.default.sep, "_"))
                                .concat(".pdf");
                            yield fsPromises.mkdir(path_1.default.dirname(pdfFileName), {
                                recursive: true,
                            });
                            doc.pipe(fs_1.default.createWriteStream(pdfFileName));
                            doc.addPage();
                        }
                        if (doc) {
                            if ((0, isbinaryfile_1.isBinaryFileSync)(filePath)) {
                                const data = fs_1.default.readFileSync(filePath).toString("base64");
                                if (fileCount > 1)
                                    doc.addPage();
                                doc
                                    .font("Courier")
                                    .fontSize(10)
                                    .text(`${fileName}\n\nBASE64:\n\n${data}`, { lineGap: 4 });
                            }
                            else {
                                let data = yield fsPromises.readFile(filePath, "utf8");
                                // Determine parser and format with Prettier if supported
                                const extension = path_1.default.extname(filePath).slice(1);
                                const parser = getPrettierParser(extension);
                                if (parser) {
                                    try {
                                        data = yield prettier_1.default.format(data, { parser });
                                    }
                                    catch (error) {
                                        const errorMessage = error.message.split("\n")[0];
                                        console.warn(`Plain text fallback at ${filePath}: ${errorMessage}`);
                                    }
                                }
                                data = data.replace(/\t/g, "    ");
                                data = data.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                                if (removeComments) {
                                    data = (0, strip_comments_1.default)(data);
                                }
                                if (removeEmptyLines) {
                                    data = data.replace(/^\s*[\r\n]/gm, "");
                                }
                                let highlightedCode;
                                try {
                                    if (addHighlighting && highlight_js_1.default.getLanguage(extension)) {
                                        highlightedCode = highlight_js_1.default.highlight(data, {
                                            language: extension,
                                        }).value;
                                    }
                                    else {
                                        highlightedCode = highlight_js_1.default.highlight(data, {
                                            language: "plaintext",
                                        }).value;
                                    }
                                }
                                catch (error) {
                                    highlightedCode = highlight_js_1.default.highlight(data, {
                                        language: "plaintext",
                                    }).value;
                                }
                                const hlData = (0, syntax_1.htmlToJson)(highlightedCode, removeEmptyLines);
                                let lineNum = 1;
                                const lineNumWidth = hlData
                                    .filter((d) => d.text === "\n")
                                    .length.toString().length;
                                for (let i = 0; i < hlData.length; i++) {
                                    const { text, color } = hlData[i];
                                    if (i === 0 || ((_a = hlData[i - 1]) === null || _a === void 0 ? void 0 : _a.text) === "\n")
                                        if (addLineNumbers) {
                                            doc.text(String(lineNum++).padStart(lineNumWidth, " ") + " ", {
                                                continued: true,
                                                textIndent: 0,
                                            });
                                        }
                                    doc.fillColor(color || "black");
                                    if (text !== "\n")
                                        doc.text(text, { continued: true });
                                    else
                                        doc.text(text);
                                }
                            }
                        }
                        if (onePdfPerFile) {
                            doc === null || doc === void 0 ? void 0 : doc.end();
                        }
                    }
                    else if (stat.isDirectory()) {
                        yield appendFilesToPdf(filePath, removeComments);
                    }
                }
            });
        }
        if (!onePdfPerFile) {
            doc === null || doc === void 0 ? void 0 : doc.on("finish", () => {
                spinner.succeed(chalk.greenBright(`PDF created with ${fileCount} files processed.`));
            });
        }
    });
}
//# sourceMappingURL=clone.js.map