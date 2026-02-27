import json

with open(r"C:\Users\chris\plantabeta\docs\data\Betoms\Properties\Properties-Betoms.json","r") as file:
    data = json.load(file)

for datum in data:
    print(f"{datum['betomKebab']},")