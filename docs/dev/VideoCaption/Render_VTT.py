"""
00:27:00.000 --> 00:27:14.000 align:left position:0% size:50%
100


"""

captionItemsList = [{
    "Dendron_ID": 34,
    "startTime": "00:01:02",
    "finishTime": "00:01:03",
    "betaCaption": "Beta sentences",
    "ekosCaption": "List of Ekons",
    "viaCaption": "List of Via", 
    "moovesCaption": "List of Mooves",
    "AnimaCaption": "Anima Sentences" 
}]


def Render_VTT(captionItemsList):
    
    captionItemsList = captionItemsList

    print("WEBVTT")
    print("Kind: captions")
    print("Language: en-CA")
    print()

    for item in captionItemsList:
        
        print(f"{item['startTime']}.000 --> {item['finishTime']}.000 align:left position:0% size:50%")
        print(f"Dendron_ID: {item['Dendron_ID']}")
        print(f"betaCaption: {item['betaCaption']}")
        print(f"ekosCaption: {item['ekosCaption']}")
        print(f"viaCaption: {item['viaCaption']}")
        print(f"moovesCaption: {item['moovesCaption']}")
        print(f"AnimaCaption: {item['AnimaCaption']}")
        print()

Render_VTT(captionItemsList)