let count = 5;
console.log("1");



const timeout = setTimeout(() => {
    console.log("8");
}, 5000);

console.log("2");


const fs = require('fs');

function writeNumberToFile(number) {
    fs.writeFile('number.txt', number, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Number 4 written to number.txt');
        }
    });
}

// דוגמה להפעלה:
writeNumberToFile("4");

// ...existing code...
const interval = setInterval(() => { 
    console.log(`Count: ${count}`); 
    count++; 
    if (count > 7) clearInterval(interval); 
}, 1000); 

console.log("3");