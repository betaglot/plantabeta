import os

directory_path = r'C:\Users\chris\plantabeta\docs\reference\Betums'  # Current directory, or specify a path like 'my_folder'

for filename in os.listdir(directory_path):
    full_path = os.path.join(directory_path, filename) # Get the full path
    if os.path.isfile(full_path): # Check if it's a file (not a directory)
        betumName = filename.split('.')[0]
        print(f"{{ text: '[{betumName}]', link: '/reference/Betums/{filename}' }},")


