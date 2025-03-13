import json

# def AddDescription():
#     for item in Skema_List:
#         item.update({"Description": ""})

#     with open("sample.json", "w") as outfile: 
#         json.dump(Skema_List, outfile)

# AddDescription()

def AddAttribute(attributeName):

    for item in Skema_List:
        item.update({f"{attributeName}": []})

# Add a timestamp 

    with open("AddElement_Output.json", "w") as outfile: 
        json.dump(Skema_List, outfile)

AddAttribute("Caption")