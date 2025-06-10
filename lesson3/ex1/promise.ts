export function sleep(time:number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

function printTime(label: string) {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    console.log(`${label}: ${h}:${m}:${s}`);
}

        // ...existing code...
    
    async function myFunction() {
        printTime("before sleep");
        await sleep(5000); // השהייה של 5 שניות
        printTime("after sleep");
    }
    
    myFunction();

