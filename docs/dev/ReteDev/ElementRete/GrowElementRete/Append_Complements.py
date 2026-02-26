import pandas as pd


def csv_to_dict_pandas(filename):
    """
    Converts a CSV file to a list of dictionaries using pandas.
    """
    df = pd.read_csv(filename)
    return df.to_dict(
        orient="records"
    )  # orient='records' creates a list of dictionaries


# Example Usage:
data_pandas = csv_to_dict_pandas(
    r"C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\Current_ElementRete.csv"
)
# print(data_pandas)


def AddComplement(RelationshipClass, ComplementRelationshipClass):

    for row in data_pandas:

        if row["_Relationship_"] == RelationshipClass:

            print(f"{row['_Target_']},{ComplementRelationshipClass},{row['_Origin_']}")

        if row["_Relationship_"] == ComplementRelationshipClass:

            print(f"{row['_Target_']},{RelationshipClass},{row['_Origin_']}")


# AddComplement("IsSuperTaxonOf","IsSubTaxonOf")

# AddComplement("_Has_The_Possible_Ekon_","_Is_A_Possible_Ekon_Of_")
# AddComplement("_Is_A_SuperAktion_Of_","_Is_A_SubAktion_Of_")
# AddComplement("_Is_A_SuperPart_Of_","_Is_A_SubPart_Of_")
# AddComplement("_Is_A_SuperTaxon_Of_","_Is_A_SubTaxon_Of_")
# AddComplement("_Has_The_Possible_Tool_","_Is_The_Possible_Tool_Of_")
# AddComplement("_Has_The_Possible_Variant_","_Is_The_Possible_Variant_Of_")
# AddComplement("_Requires_The_Somon_","_Is_The_Required_Somon_Of_")
# AddComplement("_Has_The_SubVion_","_Is_The_SubVion_Of_")
# AddComplement("_Has_The_Attribute_","_Is_An_Attribute_Of_")
# AddComplement("_Has_The_Method_","_Is_A_Method_Of_")

AddComplement("_Has_The_Possible_Somon_","_Is_A_Possible_Somon_Of_")
