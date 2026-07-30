import os
import json
from datetime import datetime

# Define configuration constants
TARGET_DIR = r"C:\Users\Lenovo\plantabeta\docs\reference"
START_DELIMITER = "::: details &"
END_DELIMITER = ":::"

# Generate dynamic output file name prefixed with current date and time
TIMESTAMP = datetime.now().strftime("%Y%m%d_%H%M%S")
OUTPUT_FILE = f"{TIMESTAMP}_DesignBox_Extracted_Contents.json"

def extract_delimited_lines(file_path):
    extracted_lines = []
    inside_block = False
    found_delimiter = False
    encodings = ["utf-8", "latin-1", "utf-16"]
    content = None

    for encoding in encodings:
        try:
            with open(file_path, "r", encoding=encoding) as f:
                content = f.readlines()
            break
        except (UnicodeDecodeError, PermissionError):
            continue

    if content is None:
        print(f" [!] Skipped: Could not read file encoding for {os.path.basename(file_path)}")
        return None

    for line in content:
        clean_line = line.rstrip("\r\n")

        # Look for start delimiter anywhere in the line
        if START_DELIMITER in clean_line:
            inside_block = True
            found_delimiter = True
            continue

        # Loose match for the end delimiter
        if inside_block and clean_line.strip() == END_DELIMITER:
            inside_block = False
            continue

        if inside_block:
            # Strip outer whitespace to check content properties
            stripped_line = clean_line.strip()
            
            # Skip if the line is completely empty
            if stripped_line == "":
                continue
                
            # Skip if the line only consists of dashes (e.g., "-", "---", etc.)
            if stripped_line.replace("-", "") == "":
                continue

            # If it passes both filters, save the line
            extracted_lines.append(clean_line)

    if not found_delimiter:
        return "EMPTY"

    if found_delimiter and not extracted_lines:
        return "EMPTY"

    return extracted_lines

def main():
    result_data = {}
    print(f"Checking directory recursively: {TARGET_DIR}...")

    if not os.path.exists(TARGET_DIR):
        print(f"Error: The directory {TARGET_DIR} does not exist.")
        return

    processed_count = 0
    empty_count = 0

    # os.walk travels down through all subfolders automatically
    for root, dirs, files in os.walk(TARGET_DIR):
        for file_name in files:
            if file_name.lower().endswith('.md'):
                file_path = os.path.join(root, file_name)
                
                # Check if file is exactly Overview.md
                if file_name.lower() == "overview.md":
                    # Get the name of the immediate folder it resides in
                    json_key = os.path.basename(root)
                else:
                    # Use the filename without extension for all other files
                    json_key, _ = os.path.splitext(file_name)

                lines = extract_delimited_lines(file_path)
                if lines is not None:
                    # Use the dynamically assigned key
                    result_data[json_key] = lines
                    processed_count += 1
                    
                    if lines == "EMPTY":
                        empty_count += 1
                        
                    print(f" [✓] Processed: {json_key} -> {lines if isinstance(lines, str) else f'{len(lines)} lines found'}")

    print(f"\nTotal Markdown (.md) files processed: {processed_count}")
    print(f"Total files with EMPTY contents: {empty_count}")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as json_file:
        json.dump(result_data, json_file, indent=4, ensure_ascii=False)

    print(f"Execution finished. Saved results to: {os.path.abspath(OUTPUT_FILE)}")

if __name__ == "__main__":
    main()
