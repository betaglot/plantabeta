import os

# Use `find . -type f,d` to get a list of all files and directories within a given directory

# for i in referencePaths:
#     i = str(i).replace("C:\\Users\\chris\\plantabeta\\docs\\", "")
    
#     i = i.replace(os.sep, '/')

#     ElementNamespaceList.append(i)

print(referencePaths)


# script_dir = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(script_dir, 'Output.json')


# def CreateElement():
    
#     outputList = []

#     for namespace in ElementNamespaceList:
#         splitnamespace = namespace.split("/")  # the characters from the left until "/"

#         elementName = splitnamespace[-1] # Get the name after the last "/" delimiter

#         outputList.append(f'{{"ElementName": "{elementName}", "Namespace": "{namespace}"}}')


#     with open(file_path, 'w') as f:
#         for line in outputList:
#             f.write(f"{line},\n")



# CreateElement()
