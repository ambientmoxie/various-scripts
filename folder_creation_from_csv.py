# Create and rename folders from a csv file
# Work in progress

import os
import pandas as pd

# Load the file
file_path = 'path/to/your/file.csv'  # Change this to the path of your CSV/XLS file

# Determine the file extension and load the file accordingly
if file_path.endswith('.csv'):
    df = pd.read_csv(file_path)
elif file_path.endswith('.xls') or file_path.endswith('.xlsx'):
    df = pd.read_excel(file_path)
else:
    raise ValueError("Unsupported file format. Please provide a CSV or XLS/XLSX file.")

# Assuming the file has columns "Number" and "Name"
# Create folders based on the values in these columns
for index, row in df.iterrows():
    folder_name = f"{row['Number']}. {row['Name']}"
    os.makedirs(folder_name, exist_ok=True)
    print(f"Created folder: {folder_name}")

print("All folders created successfully.")