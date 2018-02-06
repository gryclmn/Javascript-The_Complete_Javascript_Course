/*

var score1, score2, score3;
var height1, height2, height3;
var age1, age2, age3;
var result;

function getRand (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var rand = Math.floor(Math.random() * (max - min)) + min;
    
    return rand;
}

height1 = getRand(20,100);
height2 = getRand(20,100);
height3 = getRand(20,100);

age1 = getRand(18,64);
age2 = getRand(18,64);
age3 = getRand(18,64);

score1 = height1 + (age1 * 5);
score2 = height2 + (age2 * 5);
score3 = height3 + (age3 * 5);

if (score1 > score2 && score1 > score3) {
    result = "Player 1 wins!";
} else if (score2 > score1 && score2 > score3) {
    result = "Player 2 wins!";
} else if (score3 > score1 && score3 > score2) {
    result = "Player 3 wins!";
} else {
    result = "There is a draw.";
}

document.querySelector('#result').textContent = result;

document.querySelector('#score1').textContent = score1;
document.querySelector('#score2').textContent = score2;
document.querySelector('#score3').textContent = score3;

function calculateAge(yearOfBirth) {
    var date = new Date();
    var year = date.getFullYear();
    
    var age = year - yearOfBirth;
    return age;
}

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    var result;
    if (retirement >= 0) {
        result = name + ' has ' + retirement + ' years until retirment.';
    } else {
        result = name + ' appears to already be retired.';
    }
    return result;
}


var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

//console.log(names[0]);
//console.log(years[0]);

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john.pop());
console.log(john.shift());

console.log(john);
console.log(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
    console.log("John is not a teacher");
} else {
    console.log("John is a teacher");
}


var bob = {
    name: 'Bob',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'driver',
    isMarried: false,
    family: ['John', 'Mark', 'Jane'],
    calculateAge: function () {
        return 2017 - this.yearOfBirth;
    }
};

console.log(bob);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane.yearOfBirth = 1969;
jane['job'] = 'retired';
jane.isMarried = true;




for (var i=0; i<=10; i++) console.log(i);

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}



var i = 0;
while (i < 4) {
    console.log(i);
    i++;
}



var birthYears = [1977, 1981, 1986, 1990, 1994, 1995, 1993];

var emptyArr = [];

for (var i = 0; i < birthYears.length; i++) {
    emptyArr.push(birthYears[i]);
    
    console.log(`Person ${i} is ${calcAge(birthYears[i])} years old and therefore is of age: ${isOfAge(calcAge(birthYears[i]))}.`);
}

function calcAge(birthYear) {
    return 2017 - birthYear;
}

function isOfAge(age) {
    if (age >= 18) {
        return true;
    }
}


*/

function getTime(size) {
    // assuming 1mb/s
    var min = Math.floor(size/60);
    var hr = 0;
    
    if (min > 59) {
        hr = Math.floor(min/60);
        min = Math.floor(min - (hr * 60));
    }
    
    console.log(`A file of ${size} mb will take ${hr}:${min} (hr:min) to download.`);
}









































