import { promises as fs, read } from "fs";
import { join } from "path";

function readFileAsync(filePath: string): Promise<void> {
    return fs.readFile(filePath, 'utf8')
        .then((content) => {
            console.log("File content:", content);
        })
        .catch((err) => {
            console.error("Error reading file:", err);
        });
}

function readFolderAsync(folderPath: string): Promise<void> {
    return fs.readdir(folderPath)
        .then((files) => {
            // כאן נחזיר שרשרת של הבטחות, כל אחת עבור קובץ
            const promises = files.map((file) => {
                const fullPath = join(folderPath, file);
                console.log("Found file:", file);
                return readFileAsync(fullPath);
            });

            // נמתין שכל ההבטחות יסתיימו
            return Promise.all(promises).then(() => {});
        })
        .catch((err) => {
            console.error("Error reading folder:", err);
        });
}
readFolderAsync("./files") // עובר על כל הקבצים בתיקיה הנוכחית