import pandas as pd
from datetime import datetime


current_datetime = datetime.now()

timecode = current_datetime.strftime("%y%m%d-%H%M%S")


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

    with open(
        rf"C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\GrowElementRete\Output\{timecode}_ElementRete.csv",
        "a",
        newline="",
    ) as f:

        for row in data_pandas:

            # ToDo: Check to see if the complement already exists in data_pandas
            if row["_Relationship_"] == RelationshipClass:

                f.write(
                    f"{row['_Target_']},{ComplementRelationshipClass},{row['_Origin_']}\n"
                )

            if row["_Relationship_"] == ComplementRelationshipClass:

                f.write(f"{row['_Target_']},{RelationshipClass},{row['_Origin_']}\n")


#
#
#           Run the Code
#
#

# Possible Element from OtherFaktor
AddComplement("_Has_The_Possible_Labon_", "_Is_A_Possible_Labon_Of_")
AddComplement("_Has_The_Possible_Somon_", "_Is_A_Possible_Somon_Of_")
AddComplement("_Has_The_Possible_Ekon_", "_Is_A_Possible_Ekon_Of_")
AddComplement("_Has_The_Possible_Vion_", "_Is_A_Possible_Vion_Of_")
AddComplement("_Has_The_Possible_Moton_", "_Is_A_Possible_Moton_Of_")
AddComplement("_Has_The_Possible_Animon_", "_Is_A_Possible_Animon_Of_")

# Requires Element from OtherFaktor
AddComplement("_Requires_The_Labon_", "_Is_A_Required_Labon_Of_")
AddComplement("_Requires_The_Somon_", "_Is_A_Required_Somon_Of_")
AddComplement("_Requires_The_Ekon_", "_Is_A_Required_Ekon_Of_")
AddComplement("_Requires_The_Vion_", "_Is_A_Required_Vion_Of_")
AddComplement("_Requires_The_Moton_", "_Is_A_Required_Moton_Of_")
AddComplement("_Requires_The_Animon_", "_Is_A_Required_Animon_Of_")

# Aktion
AddComplement("_Is_A_SuperAktion_Of_", "_Is_A_SubAktion_Of_")

# Tool
AddComplement("_Has_The_Possible_Tool_", "_Is_The_Possible_Tool_Of_")

# Partonomy
AddComplement("_Is_A_SuperPart_Of_", "_Is_A_SubPart_Of_")
AddComplement("_Has_The_SubVion_", "_Is_The_SubVion_Of_")

# Taxonomy
AddComplement("_Is_A_SuperTaxon_Of_", "_Is_A_SubTaxon_Of_")
AddComplement("_Is_An_Ancestor_Of_", "_Has_The_Ancestor_")

# Methods
AddComplement("_Has_The_Method_", "_Is_A_Method_Of_")

# Attributes
AddComplement("_Has_The_Attribute_", "_Is_An_Attribute_Of_")

# Variant
AddComplement("_Has_The_Possible_Variant_", "_Is_The_Possible_Variant_Of_")
