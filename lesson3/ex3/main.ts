

import { Clock } from './time';

function pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
}
const clock = new Clock();
let count = 0; 

// כל שניה נקרא ל-tic של minute
  const interval = setInterval(() => {
    count++;
     console.log(
        `${pad(clock.gethour().getValue())}:${pad(clock.getminute().getValue())}:${pad(clock.getsecond().getValue())}`
    );
    clock.getsecond().tic();
  if (count === 5000) { 
                clearInterval(interval); 
            } 
}, 1000);
