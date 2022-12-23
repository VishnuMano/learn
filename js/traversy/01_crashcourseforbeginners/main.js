// // Strings / Properties + Methods
// const s = 'Hello World'

// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));

// // Arrays
// // Constructor:
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);
// numbers.push(6)

// // Regular:
// const fruits = ['apples', 'oranges', 'pears'];
// fruits.push('mangos');
// console.log(fruits.indexOf('oranges'));
// console.log(Array.isArray(fruits));

// console.log(fruits);

// // Object Literals
// const person = {
//     firstName: 'Vishnu',
//     lastName: 'Mano'
// }

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ]
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// // For Loops
// for(let i = 0; i < 20; i++)
// {
//     console.log(i);
// }

// // While Loops
// let i = 0;
// while(i < 10)
// {
//     console.log(i);
//     i++;
// }

// // Loop Through Arrays
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ]

// for(let i = 0; i < todos.length; i++)
// {
//     console.log(todos[i].text);
// }

// for(let todo of todos)
// {
//     console.log(todo.text);
// }

// // High Order Array Functions: forEach, map, filter
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ]

// todos.forEach(function(todo) {
//     console.log(todo.text);
// })

// let todoText = todos.map(function(todo) {
//     return todo.text;
// })
// console.log(todoText);

// todoText = todos.filter(function(todo) {
//     return (todo.isCompleted === true);
// })
// console.log(todoText);

// // Conditionals
// const x = 10;
// // == checks for values | === also checks for type
// if(x == '10')
// {
//     console.log('x is 10');
// }

// if(x === '10')
// {
//     console.log('x is 10');
// }
// else
// {
//     console.log('x is not 10');
// }

// const x = 11;
// const color = x > 10 ?  'red' : 'blue';

// switch(color)
// {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
// }

// // Functions
// function addNums(num1 = 1, num2 = 2)
// {
//     return num1 + num2;
// }

// console.log(addNums(4, 5));
// // Arrow Function
// const addNums = (num1 = 1, num2 = 2) => {
//     return num1 + num2;
// }
// console.log(addNums(1, 2));

// // OOP
// // Constructior Function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// // Prototypes
// Person.prototype.getBirthYearProto = function() {
//     return this.dob.getFullYear()
// }
// Person.prototype.getFullNameProto = function() {
//     return `${this.firstName} ${this.lastName}`
// }
// // Instantiate object
// const person1 = new Person("Vishnu", "Mano", '5-25-2005');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person1);
// const person2 = new Person('Krishna', 'Mano', '10-15-2008')
// console.log(person2.getBirthYearProto());
// // Classes
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person3 = new Person('Mano', 'Unni', '1-1-1976');
// console.log(person3.getFullName());

// // DOM
// // console.log(window); // window object is parent object of browser
// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1')); // primary single element selector
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item')); // primary multiple element selector
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// // Looping through
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// console.log(document.getElementsByClassName('items'));
// // Manipulating DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// // ul.firstElementChild.textContent = 'Hello';
// // ul.children[1].textContent = 'Vishnu';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please complete both fields';
        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); // li.appendChild adds something to the li
        userList.appendChild(li);
        
        // Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}