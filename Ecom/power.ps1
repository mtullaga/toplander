# Specify the directory path
$directoryPath = "D:\Github\toplander\Ecom"

# Specify the base name for folders
$baseName = "Ecom"

# Get all folders in the directory
$folders = Get-ChildItem -Path $directoryPath -Directory

# Initialize a counter
$counter = 1

# Iterate through each folder and rename
foreach ($folder in $folders) {
    # Generate the new folder name
    $newName = "{0}{1}" -f $baseName, $counter

    # Rename the folder
    Rename-Item -Path $folder.FullName -NewName $newName -Force

    # Increment the counter
    $counter++
}

Write-Host "Folder renaming completed."
