import json

with open(
    r"C:\Users\chris\plantabeta\docs\data\Elements\Properties-Elements.json",
    "r",
    encoding="utf-8",
) as file:
    BetomData = json.load(file)

AllElementsList = []

for key in BetomData:
    AllElementsList.append(key)

print(AllElementsList)