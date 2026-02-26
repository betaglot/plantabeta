import pandas as pd

def csv_to_dict_pandas(filename):
    """
    Converts a CSV file to a list of dictionaries using pandas.
    """
    df = pd.read_csv(filename)
    return df.to_dict(orient='records') # orient='records' creates a list of dictionaries

# Example Usage:
data_pandas = csv_to_dict_pandas(r'C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\Current_ElementRete.csv')
# print(data_pandas)

def Find_Origin_And_Relationship(Origin,Relationship):
     for row in data_pandas:
        
        if row['_Origin_'] == Origin and row['_Relationship_'] == Relationship:
            print(row)

def Find_Relationship_And_Target(Origin,Relationship):
     for row in data_pandas:
        
        if row['_Origin_'] == Origin and row['_Relationship_'] == Relationship:
            print(row)
        
Find_Relationship_And_Target()