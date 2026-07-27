import json

with open(
    r"C:\Users\chris\plantabeta\docs\data\Betoms\Properties\Properties-Betoms.json",
    "r",
    encoding="utf-8",
) as file:
    BetomData = json.load(file)


allKebabs = []

for betom in BetomData:

    allKebabs.append(betom["betomKebab"])

    allKebabsJoined = "-".join(allKebabs)

    separatedElements = allKebabsJoined.split("-")

    sortedSetOfElements = sorted(list(set(separatedElements)))


print(sortedSetOfElements)
print(len(sortedSetOfElements))
