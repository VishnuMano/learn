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

// Arrow Function
const addNums = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}
console.log(addNums(1, 2));

