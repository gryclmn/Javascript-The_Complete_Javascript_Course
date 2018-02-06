// let and const

/*
// ES5 code
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
*/

/*
// ES6
let name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5 code
function driversLicense5(passedTest) {
    
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense5(true);
*/

/*
// ES6 code
function driversLicense6(passedTest) {
    
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicense6(true);
*/


// Blocks and IIFEs

/*
// ES5 code IIFEs
(fucntion() {
    var c = 3;
 })();
*/

/*
// ES6 code no longer needs IIFEs, just encapsulate in a block using { }
{
    const a = 1; // data is encapuslated/private
    let b = 2; // data is encapuslated/private
    var c = 3; // data is public
}

console.log(c);
console.log(a);
console.log(b);
*/

// Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2018 - year;
}

// ES5 code
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


// ES6 code using Template Literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('hn'));
console.log(`${firstName} `.repeat(5));
*/

/*
// Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5 code
var ages5 = years.map(function(el) {
    return 2018 - el;
});

console.log(ages5);

// ES6 code
const ages6 = years.map(el => 2018 - el);
console.log(ages6);

// multiple params require parentheses
var multiply = (x, y) => x * y;

console.log(multiply(2,3));
*/

// More about Arrow functions

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            console.log(str);
        })
    }
}

box5.clickMe();
*/

/*
// ES6
const box6 = {
    color: 'green',
    position: 1,
    
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            console.log(str);
        });
    }
}

box6.clickMe();
*/

/*
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    });
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}.`);
    console.log(arr);
}

new Person('Jen').myFriends6(friends);
*/


// Destructuring

/*
// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];
*/

/*
// ES6
//const [name6, age6] = ['John', 26];
const [name6, age6] = john;

const obj = {
    firstName: 'Anne',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
// You can assign new names for the keys
const {firstName: a, lastName: b} = obj;

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [currentAge, retirement] = calcAgeRetirement(1981);
*/


// Arrays

//const boxes = document.querySelectorAll('.box');

/*
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
})
*/

/*
// ES6
const boxesArr6 = Array.from(boxes);
//boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
// even shorter syntax:
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
// yet even shorter syntax:
Array.from(boxes, cur => cur.style.backgroundColor = 'brown');
*/

/*
// ES5
for (var i = 0; i < boxesArr5.length; i++) {
    
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
    
}
*/

/*
// ES6 has new loop for ( Of )
for (const cur of boxesArr6) {
//    if (cur.className === 'box blue') {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = "I changed to dodgerblue!";
}
*/

/*
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/


// Spread operator
/*
function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all, cur => cur.style.color = 'purple');
*/


// Rest parameters

/*
// ES5
function isFullAge5() {
//    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016-cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);
*/

/*
// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2018 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
*/

/*
// ES5
function isFullAge5(limit, a) {
//    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
//    console.log(argsArr);
    
    argsArr.forEach(function(cur) {
        console.log((2016-cur) >= limit);
    })
}

isFullAge5(21, 1990, 1999, 1965, 2016, 1987);
*/

/*
// ES6
function isFullAge6(limit, ...years) {
    console.log(limit);
    console.log(years);
    years.forEach(cur => console.log((2018 - cur) >= 18));
}

isFullAge6(21, 1990, 1999, 1965, 2016, 1987);
*/


// Default parameters

/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'American' : nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);
*/

/*
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);
*/

/*
// Maps

// ES6

const question = new Map();
question.set('question', 'What is the official name of the latest major Javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again.');

//console.log(question.get('question'));
//console.log(question.size);

//if(question.has(4)) {
//    console.log("Answer 4 is present");
//}
//
//question.delete(4);
//
//if(question.has(4)) {
//    console.log("Answer 4 is present");
//} else {
//    console.log("Answer 4 is NOT present");
//}

//question.forEach( (value, key) => console.log(`${key}: ${value}`) );

//for (let [key, value] of question.entries()) {
//    console.log(`${key}: ${value}`);
//}

console.log(question.get('question'));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`#${key}. ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(ans);

console.log(question.get(ans === question.get('correct')));
*/

/*
// Classes

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hello');
    }
    
}

const john6 = new Person6('John', 1989, 'Programmer')
Person6.greeting();
*/

// Classes and subclasses

/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
    
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var john5 = new Athlete5('John', 1990, 'teacher', 3, 10);

john5.calculateAge();
john5.wonMedal();
*/

/*
// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }    
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
*/


// ***** CHALLENGE *****

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square mile.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5),
]

function calc(arr) {
    
    const sum = arr.reduce((prev, current) => prev + current, 0);
    
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${avgAge} years.`)
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    // Total and avg length of the town's streets
    const lengths = s.map(el => el.length);
    const [totalLength, avgLength] = calc(lengths);
    console.log(`Our ${s.length} streets have a total length of ${totalLength} miles, with an average of ${avgLength} miles.`);
    
    // Classify sizes
    s.forEach(el => el.classifyStreet());
    
}

reportParks(allParks);
reportStreets(allStreets);













