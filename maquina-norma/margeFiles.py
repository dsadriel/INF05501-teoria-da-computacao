import os

# Path to the operations.mn file
operations_file = "C:\\Users\\dsadr\\Documents\\Github\\INF05501-teoria-da-computacao\\maquina-norma\\operations.mn"

# Path to the trabalho folder
parts_folder = "C:\\Users\\dsadr\\Documents\\Github\\INF05501-teoria-da-computacao\\maquina-norma\\trabalho\\parts"

destination_folder = "C:\\Users\\dsadr\\Documents\\Github\\INF05501-teoria-da-computacao\\maquina-norma\\trabalho"

# List all files in the trabalho folder
files = os.listdir(parts_folder)

# Open the operations.mn file in append mode
with open(operations_file, "r") as operations:
    # Iterate over each file in the trabalho folder
    operations = operations.read()
    
    for file_name in files:
        # Construct the full path to the file
        file_path = os.path.join(parts_folder, file_name)
        
        # Open the file in read mode
        with open(file_path, "r") as file:
            # Read the contents of the file
            contents =  operations + file.read()
            
            with open(destination_folder + "\\" + file_name, "w") as destination_file:
                # Write the contents to the operations.mn file
                destination_file.write(contents)
            