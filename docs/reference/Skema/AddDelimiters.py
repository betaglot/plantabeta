import os

script_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(script_dir, 'Raw.txt')

list = []

with open(file_path) as file:
    for line in file:
        line = line.strip("\n")
        list.append(f"{line}")

print(list)