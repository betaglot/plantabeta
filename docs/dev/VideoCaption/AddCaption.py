import itertools

captionList = [
    "0007",
    "0024",
    "0033",
    "0042",
    "0051",
    "0059",
    "0111",
    "0120",
    "0133",
    "0152",
    "0203",
    "0214",
    "0228",
    "0240",
    "0252",
    "0304",
    "0318",
    "0331",
    "0342",
    "0352",
    "0404",
    "0414",
    "0423",
    "0433",
    "0441",
    "0450",
    "0502",
    "0512",
    "0520",
    "0528",
    "0536",
    "0543",
    "0553",
    "0608",
    "0618",
    "0634",
    "0644",
    "0655",
    "0708",
    "0721",
    "0731",
    "0746",
    "0802",
    "0814",
    "0825",
    "0842",
    "0901",
    "0912",
    "0926",
    "0943",
    "0957",
    "1008",
    "1026",
    "1044",
    "1056",
    "1113",
]

pairedCaptionList = list(itertools.pairwise(captionList))


def printVTT(startNumber):

    for pair in pairedCaptionList:

        member = str(pair[0])

        nextMember = str(pair[1])

        member = member[:2] + ":" + member[2:]

        nextMember = nextMember[:2] + ":" + nextMember[2:]

        startNumber = startNumber + 1

        print(
            f"01:{member}.000 --> 01:{nextMember}.000 align:left position:0% size:50%"
        )
        print(startNumber)
        print()


printVTT(239)
