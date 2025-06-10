import { EventEmitter } from 'events'; 


class Time extends EventEmitter{
    private timeNow: number;
    private maxTime: number;
        constructor(_timenow: number, _maxtime: number) 
        {
            super();
          this.timeNow = _timenow;
          this.maxTime = _maxtime;
        }
    tic(): void {
        
        this.timeNow++;
        if (this.timeNow >= this.maxTime) {
            this.timeNow = 0;
            this.emit('resetTime');
        }
    }
      getValue(): number {
        return this.timeNow;
    }
}

export class Clock{
    private minute: Time;
    private second: Time;
    private hour: Time;

    constructor() {
       const now = new Date();
       this.minute = new Time(now.getMinutes(), 60);
       this.second = new Time(now.getSeconds(), 60);
       this.hour = new Time(now.getHours(), 24);
       this.second.on('resetTime', () => this.minute.tic());
       this.minute.on('resetTime', () => this.hour.tic());

    }
    getminute(): Time {
        return this.minute;
    }

    setminute(val: Time) {
        this.minute = val;
    }

    getsecond(): Time {
        return this.second;
    }

    setsecond(val: Time) {
        this.second = val;
    }

    gethour(): Time {
        return this.hour;
    }

    sethour(val: Time) {
        this.hour = val;
    }
}