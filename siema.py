import os

# Set the directory where your image files are located
directory = '/Users/mario/Desktop/py'

# List all the files in the directory
files = os.listdir(directory)

# Initialize a counter for numbering
counter = 0

# Iterate through the files and rename image files to "background" with a numerical sequence
for filename in files:
    if filename.lower().endswith(('.png')):
        _, extension = os.path.splitext(filename)
        new_name = f'freemoney_{counter}{extension}'
        os.rename(os.path.join(directory, filename), os.path.join(directory, new_name))
        counter += 1

print("Image files renamed to 'background' with a numerical sequence starting from 0.")
