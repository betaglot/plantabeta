import { postcssIsolateStyles } from 'vitepress';

export default {
    plugins: [
        postcssIsolateStyles({
            includeFiles: [/base\.css/, /vp-doc\.css/, /icons\.css/, /fonts\.css/, /vars\.css/, /utils\.css/],
        }),
    ],
};