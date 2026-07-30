import json
import os
import re
import datetime

def strip_emojis(text):
    """Removes all emoji characters, including complex sequences."""
    if not isinstance(text, str):
        return str(text)
    emoji_pattern = re.compile(r'[\U00010000-\U0010ffff\u2600-\u27bf\u2300-\u23ff\u2b50\u2b55\u2934\u2935]', flags=re.UNICODE)
    return emoji_pattern.sub('', text).strip()

def invert_json_relations():
    input_name = "Input-Write_To.json"
    input_path = os.path.join(os.getcwd(), input_name)
    
    if not os.path.exists(input_path):
        print(f"Error: Could not find '{input_name}' in: {os.getcwd()}")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        raw_data = json.load(f)
    
    # 1. Clean emojis and filter empty keys
    cleaned_data = {}
    for k, v in raw_data.items():
        clean_key = strip_emojis(k)
        if not clean_key:
            continue
        if isinstance(v, list):
            cleaned_data[clean_key] = [strip_emojis(item) for item in v if strip_emojis(item)]
        else:
            cleaned_data[clean_key] = [strip_emojis(v)]

    all_keys = list(cleaned_data.keys())
    relations_map = {key: [] for key in all_keys}
    
    # 2. Match exact whole words instead of substring fragments
    for search_key in all_keys:
        escaped_key = re.escape(search_key)
        word_pattern = re.compile(rf'\b{escaped_key}\b')

        for hosting_key, list_values in cleaned_data.items():
            if search_key == hosting_key:
                continue
                
            for item in list_values:
                if word_pattern.search(item):
                    relations_map[search_key].append([hosting_key, item])
        
        # ALPHABETICAL SORT: Sort the results by the hosting_key name
        relations_map[search_key].sort(key=lambda x: x[0].lower())

    # 3. Filter unused keys
    final_output = {k: v for k, v in relations_map.items() if v}

    # Synchronized time markers
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y%m%d_%H%M%S")
    display_time = now.strftime("%Y-%m-%d %H:%M:%S")

    # 4. Save JSON file
    json_output_name = f"{timestamp}_DesignBox_Relations.json"
    with open(os.path.join(os.getcwd(), json_output_name), 'w', encoding='utf-8') as f:
        json.dump(final_output, f, indent=4)

    # 5. Save Markdown file
    md_output_name = f"{timestamp}_DesignBox_Relations.md"
    markdown_lines = [f"# DesignBox Relations Report\n_Generated on {display_time}_\n"]
    
    for search_key, occurrences in final_output.items():
        markdown_lines.append(f"## {search_key};")
        for hosting_key, original_text in occurrences:
            escaped_key = re.escape(search_key)
            span_replacement = f'<span style="text-decoration: underline lime; font-weight: bold;">{search_key}</span>'
            highlighted_text = re.sub(rf'\b{escaped_key}\b', span_replacement, original_text)
            
            markdown_lines.append(f"* `{hosting_key}`: {highlighted_text}")
        markdown_lines.append("")

    with open(os.path.join(os.getcwd(), md_output_name), 'w', encoding='utf-8') as f:
        f.write("\n".join(markdown_lines))
        
    print(f"Successfully generated:")
    print(f"  - JSON: '{json_output_name}'")
    print(f"  - MD:   '{md_output_name}'")

if __name__ == "__main__":
    invert_json_relations()
