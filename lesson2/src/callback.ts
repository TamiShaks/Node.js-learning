import fs from 'fs';
import SuperAgent, { Response } from 'superagent';

const writeCallback = function (err: any) {
    if (err) {
        console.log("❌ Failed writing result to file:", err);
    } else {
        console.log("✅ Finished writing to output.txt");
    }
};

const getCallback = function (err: any, res: Response) {
    if (err) {
        console.log(`❌ API request failed: ${err}`);
        return;
    }

    // בודקים אם יש תוצאה
    if (!res.body || !Array.isArray(res.body) || res.body.length === 0) {
        console.log("❌ No definitions found");
        return;
    }

    const firstEntry = res.body[0];
    const firstMeaning = firstEntry.meanings?.[0]?.definitions?.[0]?.definition;

    if (!firstMeaning) {
        console.log("❌ Definition not found in API response");
        return;
    }

    // כותבים את ההגדרה לקובץ
    fs.writeFile('output.txt', firstMeaning, writeCallback);
};

const readCallback = function (err: any, data: Buffer) {
    if (err) {
        console.log("❌ Failed reading input data:", err);
        return;
    }

    const word = data.toString().trim(); // מסיר רווחים מיותרים
    console.log("🔍 Looking up:", word);

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${'word'}`;
    SuperAgent.get(url, getCallback);
};

// מתחילים בקריאת הקובץ
fs.readFile('src/input.txt', readCallback);

// הפעלה:
// npx ts-node src/2_API_callback.ts
