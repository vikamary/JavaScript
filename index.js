//First Task

let x = 20;
let y = 58;
let z = 42;

let sum = x + y + z;
console.log("Результат переменных:", sum);

//Second Task

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;

let myAgeInYears = 21;

let myAgeInSeconds = secondsInMinute * minutesInHour * hoursInDay * daysInYear * myAgeInYears;

console.log("My age in seconds:", myAgeInSeconds);

//Third Task

// 1st method

let count = 42;
let userName = '42';

let countString = String(count);

let userNameNumber = parseInt(userName);

console.log('Count as String:', countString);
console.log('User Name as number:', userNameNumber);

/* 2nd method

let count = 42;
let userName = '42';

let countString = count + '';
let userNameNumber = +userName;

console.log('Count as String', countString);
console.log('User Name as number', userNameNumber); */

//4th Task

let a = 1;
let b = 2;
let c = " белых медведей";

let result = a.toString() + b.toString() + c;

console.log(result);

//5th Task

let word1 = 'доступ';
let word2 = 'морпех';
let word3 = 'наледь';
let word4 = 'попрек';
let word5 = 'рубил';

let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log('Lenght all words in lists:', lengthWords);
