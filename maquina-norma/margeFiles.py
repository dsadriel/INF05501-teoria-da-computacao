import os

# Path to the operations.mn file
operations_file = "./maquina-norma/operations.mn"

# Path to the trabalho folder
parts_folder = "./maquina-norma/trabalho"

destination_folder = "./maquina-norma/trabalho/merged_files"

# List all files in the trabalho folder
files = [file for file in os.listdir(parts_folder) if os.path.isfile(os.path.join(parts_folder, file))]

operations_content = ''
# Append the content of operations_file to the content
with open(operations_file, 'r') as f:
    operations_content = f.read()
        
# Merge the files in parts_folder with operations_file
for file in files:
    # Read the content of the file in parts_folder

    with open(os.path.join(parts_folder, file), 'r') as f:
        content = f.read()
    
    # Write the merged content to the destination_folder
    merged_file_path = os.path.join(destination_folder, file)
    with open(merged_file_path, 'w') as f:
        f.write(operations_content + '\n\n' + content)