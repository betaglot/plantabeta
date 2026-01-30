import os
import re
import csv

def extract_markdown_tags(directory_path, output_csv):
    # Regex pattern: look for # <BB, capture everything (.*?), then find />
    # re.DOTALL ensures it captures text even if it spans multiple lines
    pattern = re.compile(r'# <BB(.*?)\s*/>', re.DOTALL)
    
    results = []

    # Iterate through all files in the given directory
    for filename in os.listdir(directory_path):
        if filename.endswith(".md"):
            file_path = os.path.join(directory_path, filename)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = pattern.findall(content)
                
                # Add each found match to our results list
                for match in matches:
                    results.append([filename, match.strip()])

    # Write the results to the CSV file
    with open(output_csv, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Filename', 'Extracted Text']) # Header
        writer.writerows(results)

    print(f"Extraction complete! Data saved to {output_csv}")

# Usage: Change '.' to your specific folder path if needed
extract_markdown_tags(directory_path=r'C:\Users\chris\plantabeta\docs\reference\Betoms', output_csv=r'C:\Users\chris\plantabeta\docs\data\Betoms\Output\extracted_data.csv')