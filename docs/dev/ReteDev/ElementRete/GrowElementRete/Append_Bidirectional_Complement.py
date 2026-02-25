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


def AddComplement(RelationshipClass,ComplementRelationshipClass):

    for row in data_pandas:
        
        if row['_Relationship_'] == RelationshipClass:
        
            print(f"{row['_Out_']},{ComplementRelationshipClass},{row['_In_']}")

        if row['_Relationship_'] == ComplementRelationshipClass:
        
            print(f"{row['_Out_']},{RelationshipClass},{row['_In_']}")
        
# AddComplement("IsSuperTaxonOf","IsSubTaxonOf")

