'use strict'
// Lesson 26 task 1
let car = {
    mark: 'Audi',
    model: 'Q5',
    year: 2021,
    speed: 100,
    timeSumm(distance) {
        let time = distance / this.speed;
        let recavery = Math.floor(time / 4);
        if (time % 4 === 0) {
            time--;
        }
        let result = time + recavery;
        console.log(result);
    }
}
console.log(car);
car.timeSumm(1350);

// Lesson 26 task 3
let time = {
    h: 1,
    m: 31,
    s: 11,
    yourTime() {
        console.log(`Your time is ${this.h}:${this.m}:${this.s}`);
    },
    timeSec(sec) {
        this.s = this.s + sec;
        if (this.s>=60) {
            this.m++;
            this.s = this.s-60;
        }
        if (this.s<=10) {
            this.s = '0' + this.s;
        }
        console.log(`Your time is ${this.h}:${this.m}:${this.s}`);
    },
timeMin (min) {
    this.m = this.m + min;
    if (this.m>=60) {
        this.h++;
        this.m = this.m-60;
    }
    if (this.m<=10) {
        this.m = '0' + this.m;
    }
    console.log(`Your time is ${this.h}:${this.m}:${this.s}`);
},
timeHour (hour) {
    this.h = this.h + hour;
  
    if (this.h<=10) {
        this.h = '0' + this.h;
    }
    console.log(`Your time is ${this.h}:${this.m}:${this.s}`);
}
}
time.yourTime();
time.timeSec(55);
time.timeMin (28);
time.timeHour (15)
