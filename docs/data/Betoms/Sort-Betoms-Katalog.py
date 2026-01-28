import pandas as pd
import json
import sys
from datetime import datetime


current_datetime = datetime.now()

timecode = current_datetime.strftime("%m%d-%H%M%S")

# Define the input and output file names
input_file = r'C:\Users\chris\klimbeta\docs\dev\BetomGlyf\Input-BetomGlyf.csv'  # Replace with your file name
json_output_file = rf'C:\Users\chris\klimbeta\docs\data\Betoms\Output\output_JSON_data-{timecode}.json' # Replace with your desired output file name
psv_output_file = rf'C:\Users\chris\klimbeta\docs\data\Betoms\Output\output_Pipe_data-{timecode}.csv' # Replace with your desired output file name



try:
    # Read the pipe-separated file into a pandas DataFrame, specifying the separator
    df = pd.read_csv(input_file, sep='|')

    no_duplicates = df.drop_duplicates()

    sorted_df = no_duplicates.sort_values(by=['Labor', 'Soma', 'Ekos', "Via", 'Motor', 'Anima', 'Dev'], ascending=True)


    # Convert the DataFrame to a JSON string with 'records' orientation (list of objects) and indentation for readability
    # The 'records' orientation is ideal for representing row-based data in JSON
    psv_output = sorted_df.to_csv(sep='|', index=False)

    json_output = sorted_df.to_json(orient='records', indent=4)

    with open(psv_output_file, 'w', newline='') as f:
        f.write(psv_output)

    # Write the JSON string to an output file
    with open(json_output_file, 'w') as f:
        f.write(json_output)

    print(f"Successfully converted")

except FileNotFoundError:
    print(f"Error: The file {input_file} was not found.")
    sys.exit(1)
except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)