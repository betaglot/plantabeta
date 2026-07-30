import json
import os
import re
import datetime

def strip_emojis(text):
    """Removes emojis from keys or string elements within lists."""
    if not isinstance(text, str):
        return text
    emoji_pattern = re.compile(
        '['
        '\U00010000-\U0010ffff'
        '\u2600-\u27bf'
        '\u2300-\u23ff'
        ']+', 
        flags=re.UNICODE
    )
    return emoji_pattern.sub('', text).strip()

def invert_json_relations():
    input_name = "Input-Write_To.json"
    input_path = os.path.join(os.getcwd(), input_name)
    
    if not os.path.exists(input_path):
        print(f"Error: Could not find '{input_name}' in: {os.getcwd()}")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        raw_data = json.load(f)
    
    # 1. Clean emojis from all keys and list elements
    cleaned_data = {}
    for k, v in raw_data.items():
        clean_key = strip_emojis(k)
        if clean_key:
            if isinstance(v, list):
                cleaned_data[clean_key] = [strip_emojis(str(item)) for item in v]
            else:
                cleaned_data[clean_key] = [strip_emojis(str(v))]

    all_keys = list(cleaned_data.keys())
    relations_map = {key: [] for key in all_keys}
    
    # 2. Iterate through lists to find where keynames exist as substrings
    for search_key in all_keys:
        for hosting_key, list_values in cleaned_data.items():
            # EXCLUSION CHECK: Skip processing if the key is looking inside itself
            if search_key == hosting_key:
                continue
                
            for item in list_values:
                if search_key in item:
                    # Records a sublist containing [Hosting Key, Found String Value]
                    relations_map[search_key].append([hosting_key, item])

    # 3. Filter out keys that were never found anywhere
    final_output = {k: v for k, v in relations_map.items() if v}

    # Generate a single synchronized timestamp for both files
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")

    # 4. Save JSON file
    json_output_name = f"{timestamp}_DesignBox_Relations.json"
    json_output_path = os.path.join(os.getcwd(), json_output_name)
    with open(json_output_path, 'w', encoding='utf-8') as f:
        json.dump(final_output, f, indent=4)

    # 5. Build and Save Markdown file
    md_output_name = f"{timestamp}_DesignBox_Relations.md"
    md_output_path = os.path.join(os.getcwd(), md_output_name)
    
    markdown_lines = [f"# DesignBox Relations Report\n_Generated on {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}_\n"]
    
    for search_key, occurrences in final_output.items():
        markdown_lines.append(f"## {search_key}")
        for hosting_key, original_text in occurrences:
            # Replaces the keyname with an inline CSS style for a wavy lime underline
            highlighted_text = original_text.replace(
                search_key, 
                f'<span style="text-decoration: underline wavy lime; font-weight: bold;">{search_key}</span>'
            )
            markdown_lines.append(f"* `{hosting_key}`: {highlighted_text}")
        markdown_lines.append("") # Extra newline spacing between headers

    with open(md_output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(markdown_lines))
        
    print(f"Successfully generated:")
    print(f"  - JSON: '{json_output_name}'")
    print(f"  - MD:   '{md_output_name}'")

if __name__ == "__main__":
    invert_json_relations()
