import os

# Path to the operations.mn file
operations_file = "C:\\Users\\dsadr\\Documents\\Github\\INF05501-teoria-da-computacao\\maquina-norma\\operations.mn"

# Path to the trabalho folder
parts_folder = "C:\\Users\\dsadr\\Documents\\Github\\INF05501-teoria-da-computacao\\maquina-norma\\trabalho"

destination_folder = "C:\\Users\\dsadr\\Documents\\Github\\INF05501-teoria-da-computacao\\maquina-norma\\trabalho\\merged_files"

# List all files in the trabalho folder
files = os.listdir(parts_folder)

# Merge the files in parts_folder with operations_file
for file in files:
    # Read the content of the file in parts_folder
    with open(os.path.join(parts_folder, file), 'r') as f:
        content = f.read()
    
    # Append the content of operations_file to the content
    with open(operations_file, 'r') as f:
        operations_content = f.read()
        content += operations_content
    
    # Write the merged content to the destination_folder
    merged_file_path = os.path.join(destination_folder, file)
    with open(merged_file_path, 'w') as f:
        f.write(content)