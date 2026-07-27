import pandas as pd

# Read the CSV file, specifying the second column by its index (1)
# Column indices start at 0, so the second column is index 1.
df = pd.read_csv(r"C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\Current_ElementRete.csv", usecols=[1])

# Convert the DataFrame column (which is a Pandas Series) to a Python set
second_column_values_set = set(df.iloc[:, 0].tolist())

# Print the set of values
print(second_column_values_set)
