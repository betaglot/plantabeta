def append_comma_to_new_file(input_filepath, output_filepath):
    with open(input_filepath, 'r') as infile, open(output_filepath, 'w') as outfile:
        for line in infile:
            outfile.write(line.rstrip('\n') + ',\n') #

# Usage
append_comma_to_new_file(r'C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\All_Elements_From_Config.txt', r'C:\Users\chris\plantabeta\docs\dev\ReteDev\ElementRete\All_Elements_From_Config_Output.txt')
