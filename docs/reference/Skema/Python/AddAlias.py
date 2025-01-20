import json

Skema_List = []
# def AddDescription():
#     for item in Skema_List:
#         item.update({"Description": ""})

#     with open("sample.json", "w") as outfile: 
#         json.dump(Skema_List, outfile)

# AddDescription()

def AddAlias():

    for item in Skema_List:
        item.update({"Alias": ""})

    with open("sample.json", "w") as outfile: 
        json.dump(Skema_List, outfile)

AddAlias()