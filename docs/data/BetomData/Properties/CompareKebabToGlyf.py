PropertiesBetoms = []




import re
import string

def MakeKebabFromGlyf(GlyfDict):
    GlyfList = []

    non_empty_values = [value for value in GlyfDict.values() if value]
    
    GlyfList.extend(non_empty_values)

    output_string = "-".join(GlyfList)

    # Create a translation table that maps all punctuation characters to a hyphen
    # The use of re.escape ensures special regex characters in string.punctuation
    # are handled correctly.
    punctuation_pattern = '[' + re.escape(string.punctuation) + ']'
  
  # Use re.sub to replace any character matching the pattern with a hyphen
    return re.sub(punctuation_pattern, '-', output_string)
    

for betom in PropertiesBetoms:
    Kebab = betom["betomKebab"]
    GlyfDict = betom["betomglyf"]

    Glyf = MakeKebabFromGlyf(GlyfDict)

    

    if not Kebab == Glyf:
        print(Kebab)
        print(Glyf)
        print()
 
        

