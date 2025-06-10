import { readdir, readFile } from "fs";
import { join } from "path";

function readFileWithCallback(filePath: string, callback: () => void): void {
    readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            console.error("Error reading file:", filePath, err);
        } else {
            console.log(`\nFile: ${filePath}\n${content}`);
        }
        callback(); // מסמנים שהקובץ הנוכחי הסתיים
    });
}

function readFolderWithCallback(folderPath: string): void {
    readdir(folderPath, (err, files) => {
        if (err) {
            console.error("Error reading folder:", err);
            return;
        }

        let index = 0;

        function next() {
            if (index < files.length) {
                const filePath = join(folderPath, files[index]);
                index++;
                readFileWithCallback(filePath, next); // המשך לקרוא את הקובץ הבא רק לאחר סיום הנוכחי
            }
        }

        next(); // מתחילים את הלולאה
    });
}


// דוגמה לשימוש:
readFolderWithCallback("./files"); // עובר על כל הקבצים בתיקיה הנוכחית