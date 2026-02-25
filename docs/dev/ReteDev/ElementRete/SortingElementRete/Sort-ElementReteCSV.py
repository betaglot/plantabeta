import pandas as pd
from datetime import datetime


current_datetime = datetime.now()

timecode = current_datetime.strftime("%y%m%d-%H%M%S")

# Load the CSV file
df = pd.read_csv(r'C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\Current_ElementRete.csv')


# Sort by 'Name' (ascending) and then by 'Age' (descending)
df_sorted = df.sort_values(by=['In', 'Relationship', 'Out', 'Description', 'Dev'])

# View the first few rows of the sorted DataFrame
print(df_sorted.head())

# Save the sorted data to a new CSV file
df_sorted.to_csv(rf'C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\{timecode}-Sorted_ElementRete.csv', index=False)
