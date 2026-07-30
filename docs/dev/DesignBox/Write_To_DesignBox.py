import json
import os
import re

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
    output_name = "DesignBox_Relations.json"
    
    input_path = os.path.join(os.getcwd(), input_name)
    output_path = os.path.join(os.getcwd(), output_name)
    
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
                # Process each string inside the array, stripping emojis
                cleaned_data[clean_key] = [strip_emojis(str(item)) for item in v]
            else:
                cleaned_data[clean_key] = [strip_emojis(str(v))]

    all_keys = list(cleaned_data.keys())
    relations_map = {key: [] for key in all_keys}
    
    # 2. Iterate through lists to find where keynames exist as substrings
    for search_key in all_keys:
        for hosting_key, list_values in cleaned_data.items():
            for item in list_values:
                # Substring match (change to search_key == item for exact match)
                if search_key in item:
                    relations_map[search_key].append(hosting_key)
                    break  # Found a match in this list, move to next hosting key

    # 3. Filter out keys that were never found anywhere
    final_output = {k: v for k, v in relations_map.items() if v}

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(final_output, f, indent=4)
        
    print(f"Successfully generated '{output_name}' from list values.")

if __name__ == "__main__":
    invert_json_relations()
