import itertools

captionList = []

pairedCaptionList = list(itertools.pairwise(captionList))


def printVTT(startNumber):

    for pair in pairedCaptionList:

        member = str(pair[0])

        nextMember = str(pair[1])

        member = member[:2] + ":" + member[2:]

        nextMember = nextMember[:2] + ":" + nextMember[2:]

        startNumber = startNumber + 1

        print(
            f"00:{member}.000 --> 00:{nextMember}.000 align:left position:0% size:50%"
        )
        print(startNumber)
        print()


printVTT()
