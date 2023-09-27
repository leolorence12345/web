import os

image_dir = 'D:\\webs\\webs\\CLASSROOMS'  # Name of the directory containing your images

# Get a list of all image files in the directory
image_files = [f for f in os.listdir(image_dir) if f.endswith(('.jpg', '.jpeg', '.png', '.gif'))]

# Generate relative paths for each image
relative_paths = [os.path.join(image_dir, f) for f in image_files]

# Print the relative paths (you can copy and paste these into your markerData)
for path in relative_paths:
    print('"' + path + '",')
