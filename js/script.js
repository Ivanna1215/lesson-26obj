'use strict'
// Lesson 26 task 1
let car = {
    mark: 'Audi',
    model:'Q5',
    year:2021,
    speed:100,
    timeSumm  (distance) {
let time = distance / this.speed;
let recavery = Math.floor( time /4);
if (time%4===0){
    time--;
    } 
let result = time + recavery;
console.log (result);
    }
}
console.log (car);
car.timeSumm(1350);

// Lesson 26 task 3
let time = {
    h: 1,
    m:31,
    s:11,
    yourTime () {
        console.log (`Your time is ${h} :${m}:${s}`);
    }
}
time.yourTime()