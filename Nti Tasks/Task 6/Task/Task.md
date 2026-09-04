### 📁 File Organizer Script Task

Build an automated Node.js script that dynamically organizes files within a directory by sorting them into subfolders based on their file extensions.

---

#### 📌 Features & Requirements

* **Core Functionality:**
  * Reads all files in the current working directory.
  * Dynamically creates subfolders named after file extensions (e.g., `PNG/`, `JPG/`, `JS/`).
  * Moves each file into its corresponding extension folder automatically.

* **Execution Safety & Dynamic Handling:**
  * **Self-Preservation:** The script file (`organize.js`) remains in the root directory and is excluded from being moved.
  * **Dynamic Mapping:** No hardcoded extension names; folder creation adapts strictly to existing files.
  * **Edge Cases (Bonus):** Safely handles files without extensions without throwing errors or crashing.

* **Tech Stack & Constraints:**
  * Built using pure **Node.js** built-in modules (`fs` / `path`).
  * Zero external dependencies or npm packages required.

---

#### 📂 Directory Structure Preview

**Before Running:**
```text
project/
├── organize.js
├── image.png
├── photo.jpg
├── notes.txt
├── data.json
├── app.js
└── style.css
