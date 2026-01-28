"""
Use this code after running  

```
find . -type f
```
in the terminal to get all the file paths of a current directory.

Then append the File Paths into a list 

"""

import os

# Import

script_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(script_dir, 'Raw.txt')

list = []

with open(file_path) as file:
    for line in file:
        line = line.strip("\n")
        list.append(f"{line}")

print(list)