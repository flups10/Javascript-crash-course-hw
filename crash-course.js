const name = 'John';
const age = 30;

console.log('My name is ' + name + ' and I am ' + age)

console.log(`My name is ${name} and I am ${age}`)

// Arrays

const fruits = ['apples', 'oranges', 'pears']

fruits[3] = 'grapes'
fruits.push('mangos')
fruits.unshift(' strawberries')
// remove last one
fruits.pop()
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('oranges'))
// objects
const person = {
    firstName: 'John',
    lastName: 'doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

const { firstName, lastName, adress: {city} } = person;
person.email = 'Johndoe@email.com'
console.log(person)

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Take out trash',
        isCompleted: false
    }
];

// Loops
for (let i = 0; i <= 10; i++){
    console.log(`for i = ${i}`)
};

let i = 0;
while(i < 10){
    console.log(`while i = ${i}`)
    i++
};

for( let x of todos) {
    console.log(x.text)
};

todos.forEach(function(todo){
    console.log(todo.text);
});


// New array
const mapFunction = todos.map(function(todo){
    return todo.text;
});

const filterFunction = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(filterFunction)

const number = 10

if(number === 10){
    console.log('10!')
} else if(number > 10) {
    console.log('More than 10!')
} else {
    console.log('less than 10')
}

// || === OR
// && === AND
// ?  === Than
// :  === Else
const number2 = 10
const color = number2 > 10 ? 'red': 'blue';
// Is number 2 greater than 10? Red if yes, Blue if no

switch(color){
    case 'red':
        console.log('Color red?')
        break;
    case 'blue':
        console.log('Im blue')
        break;
        
    default:
        console.log('no blue or red')
        break;
}

function addNums(num1, num2){
    console.log(num1 + num2)
}

//Arrow functions!, good stuff

const arrowNums = (num1 = 1, num2 = 1) => num1 + num2;

const arrowFunc = (num1 = 1) => num1 + 3;

addNums(4,5);

console.log(arrowFunc(3));

// Constructor function
// Capitalletter required!!
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
};
// Prototype, Better solution than build in function if not neccesary
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

//Class
class ClassPerson {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${firstName} ${lastName}`
    }
}

// Instantiate
const person1 = new Person('John', 'Doe', '4-3-1998')
const person2 = new Person('Joe', 'Hoe', '5-5-1995')

console.log(person1.getBirthYear());
console.log(person1.getFullName());

