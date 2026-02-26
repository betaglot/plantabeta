import pandas as pd
from datetime import datetime


current_datetime = datetime.now()

timecode = current_datetime.strftime("%y%m%d-%H%M%S")

# Load the CSV file
df = pd.read_csv(r'C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\Current_ElementRete.csv')

# Remove Duplicates
no_duplicates = df.drop_duplicates()

# Sort by 'Name' (ascending) and then by 'Age' (descending)
df_sorted = no_duplicates.sort_values(by=['_In_', '_Relationship_', '_Out_', '_Dev_'])

# View the first few rows of the sorted DataFrame
print(df_sorted.head())

# Save the sorted data to a new CSV file
df_sorted.to_csv(rf'C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\SortingElementRete\{timecode}-Sorted_ElementRete.csv', index=False)
