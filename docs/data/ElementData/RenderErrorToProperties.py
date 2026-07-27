missing = [
  
"Anima_Sleep",
"Anima_Sleep",
"Ekos_Ekosfera_Biosfera_Flora_Leaf",
"Ekos_Ekosfera_Biosfera_Flora_Leaf",
"Ekos_Ekosfera_Biosfera_Flora_Root",
"Ekos_Ekosfera_Biosfera_Flora_Root",
"Ekos_Ekosfera_Hydrosfera_Hydro",
"Ekos_Ekosfera_Hydrosfera_Hydro",
"Ekos_Klimon_Ground",
"Ekos_Klimon_Ground",
"Ekos_Klimon_Prokline",
"Ekos_Klimon_Prokline",
"Ekos_Klimon_Rekline",
"Ekos_Klimon_Rekline",
"Labor_Employment_Transit_Bus",
"Labor_Employment_Transit_Bus",
"Labor_Employment_Transit_Crummy",
"Labor_Employment_Transit_Crummy",
"Labor_Employment_Transit_Truck",
"Labor_Employment_Transit_Truck",
"Labor_Employment_Transit_WalkIn",
"Labor_Employment_Transit_WalkIn",
"Labor_Employment_Transit_WalkOut",
"Labor_Employment_Transit_WalkOut",
"Labor_Performance_Waste",
"Labor_Performance_Waste",
"Labor_Strategy_Rekky",
"Labor_Strategy_Rekky",
"Labor_Tasks_Aktions_Abdukt",
"Labor_Tasks_Aktions_Abdukt",
"Labor_Tasks_Aktions_Addukt",
"Labor_Tasks_Aktions_Addukt",
"Labor_Tasks_Aktions_Branta",
"Labor_Tasks_Aktions_Branta",
"Labor_Tasks_Aktions_Cross",
"Labor_Tasks_Aktions_Cross",
"Labor_Tasks_Aktions_Defend",
"Labor_Tasks_Aktions_Defend",
"Labor_Tasks_Aktions_Dilate",
"Labor_Tasks_Aktions_Dilate",
"Labor_Tasks_Aktions_Doff",
"Labor_Tasks_Aktions_Doff",
"Labor_Tasks_Aktions_Don",
"Labor_Tasks_Aktions_Don",

]


unique_list = list(set(missing))

comma_list = []

for i in unique_list:

    comma_string = i.replace("_", ",")
    comma_list.append(comma_string)

# print(comma_list)


split_list = []

for i in comma_list:
    split_string = i.split(",")
    split_list.append((split_string))


# print(split_list)

import json

for i in split_list:
    
    elementName = i[-1]
    elementFaktor = i[0]
    
    print(f"\"{elementName}\": {{")
    print("\"elementEnglishName\": \"\",")
    print(f"\"elementFaktor\": \"{elementFaktor}\",")
    print("\"elementID\": \"\",")
    print(f"\"elementTaxonomy\": {json.dumps(i)},")
    print("\"elementAlias\": [],")
    print("\"elementDescription\": \"\",")
    print("\"elementBetanyms\": [],")
    print("\"elementInBetom\": [],")
    print("\"elementProfilePic\": \"\",")
    print("\"elementExample\": {")
    print("\"elementVideo\": [],")
    print("\"elementImage\": [],")
    print("\"elementQuote\": []")
    print("},")
    print("\"dev\" : [\"\"]")
    print("},")