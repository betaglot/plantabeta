import json

with open(r"C:\Users\chris\plantaBeta\docs\data\Elements\Properties-Elements.json", "r", encoding='utf-8') as file:
        data = json.load(file)

for element, properties in data.items():
    print(f"{element},IsFaktor,{properties['elementFaktor']}")
