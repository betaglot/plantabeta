import json


Skema_List = []

HasSuperElementList = []

"""

If Element has a SuperElementName, 
then add your SuperElement and ElementName to HasSuperElementList
Key is SuperElementName, Value is ElementName



Interate over HasSuperElementList
Append ElementName to each Element's SubElementNameList

"""


def WriteSubElement():
    for element in Skema_List:
        for item in HasSuperElementList:

            key = list(item.keys())[0]

            value = list(item.values())[0]

            if element["ElementName"] == key:
                element["SubElementName"].append(value)

    with open("WriteSubElement.json", "w") as outfile: 
        json.dump(Skema_List, outfile)


# def WriteSubElement():

#     HasSuperElementList = []

#     for element in Skema_List:
#         if element["SuperElementName"]:

#             item = {element["SuperElementName"]: element["ElementName"]}

#             HasSuperElementList.append(item)
#         else:
#             pass

#     print(HasSuperElementList)

#     for item in HasSuperElementList:
#         if element["ElementName"] == list(item.keys())[0]:

#             element["SubElementName"].append(list(item.values())[0])
#         print(f"This is the Item {item}")

#     print(Skema_List)


WriteSubElement()


