def AddTaks():
    plantorZonesList = ["Anterior", "Posterior", "Lateral"]

    taktsList = [""]

    directionsList = ["Up","Down","Medial","Distal"]

    MOTONNameList = ["BrazoMOTON"]

    for namespace in namespaceList:
        
        # If element['Namespace'] contains MOTONName, then 
        for MOTONName in MOTONNameList:
            if MOTONName in namespace:
                for plantorZone in plantorZonesList:
                    for direction in directionsList:
                        print(namespace + "/" + plantorZone + "/" + direction) 

AddTaks()
