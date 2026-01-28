import json

Skema_List = []


def WriteSuperElement():
    for element in Skema_List:

        namespace = element["Namespace"]  # Get namespace

        splitnamespace = namespace.split("/")  # the characters from the left until "/"

        if len(splitnamespace) >= 2:

            superElementName = splitnamespace[-2]

            element["SuperElement"] = superElementName

        else:
            pass

    with open("sample.json", "w") as outfile:
        json.dump(Skema_List, outfile)


WriteSuperElement()
