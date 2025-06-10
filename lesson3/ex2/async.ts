import { promises } from "fs"; 
import { join } from "path";
async function readFileAsync(filePath: string): Promise<void> { 
    const content = await promises.readFile(filePath, 'utf8'); 
    console.log("File content:", content); 
} 

async function readFolderAsync(folderPath: string): Promise<void> {
     const files = await promises.readdir(folderPath);
    for (const file of files) {
        
        const fullPath = join(folderPath, file);
        console.log("Found file:", file);
        await readFileAsync(fullPath);
    }
}

// דוגמה לשימוש:
readFolderAsync("./files"); // עובר על כל הקבצים בתיקיה הנוכחית