import json 

with open(r"C:\Users\chris\klimbeta\docs\data\Elements\Properties-Elements.json", "r", encoding='utf-8') as file:
        data = json.load(file)

for user_id, user_details in data.items():
    if not user_details['elementProfilePic']:
        print(f"Element: {user_id}, {user_details['elementProfilePic']}")

