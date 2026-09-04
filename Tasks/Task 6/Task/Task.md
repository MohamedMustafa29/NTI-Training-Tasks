File Organizer Task
Task: File Organizer Script
Objective
Create a Node.js script that organizes files in the same directory based on their file extensions.

Requirements
Place your script inside a directory containing random files with different extensions.

Example:

project/
├── organize.js
├── image.png
├── photo.jpg
├── notes.txt
├── data.json
├── app.js
└── style.css
Your script should read all files in the current directory.

For each file extension, create a separate folder named after that extension.

Example:

project/
├── organize.js
├── PNG/
├── JPG/
├── TXT/
├── JSON/
├── JS/
└── CSS/
Move each file into the folder corresponding to its extension.

For example:

JS/
└── app.js
JPG/
└── photo.jpg
The script file itself must remain in the main directory and must not be moved into any folder.

The folder names must be generated dynamically based on the files’ extensions.

Do not hard-code extension names.

Expected Result
Before Running the Script
project/
├── organize.js
├── image.png
├── photo.jpg
├── notes.txt
├── data.json
├── app.js
└── style.css
After Running the Script
project/
├── organize.js
├── PNG/
│   └── image.png
├── JPG/
│   └── photo.jpg
├── TXT/
│   └── notes.txt
├── JSON/
│   └── data.json
├── JS/
│   └── app.js
└── CSS/
    └── style.css
Bonus
Handle files that have no extension without causing the script to crash.

Suggested Node.js Modules
You may use Node.js built-in modules such as:

fs
path
Do not use external packages.