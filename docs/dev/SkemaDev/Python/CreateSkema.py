import os

script_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(script_dir, 'Output.json')

ElementNamespaceList = []

def CreateSkema():
    
    outputList = []

    for namespace in ElementNamespaceList:
        splitnamespace = namespace.split("/")  # the characters from the left until "/"

        elementName = splitnamespace[-1] # Get the name after the last "/" delimiter

        outputList.append(f'{{"ElementName": "{elementName}", "Namespace": "{namespace}","SuperElement": [],"SubElement": [],"ConcurrentElement": [],"EkoElement": [],"ViaElement": [],"MooveElement": [],"PsikeElement": []}}')


    with open(file_path, 'w') as f:
        for line in outputList:
            f.write(f"{line},\n")



CreateSkema()
