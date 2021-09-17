'use strict';

// function calcAge (birthYear){
//     const age = 2037 - birthYear;
//     console.log(firstName);
//     return age;
// }

// const firstName = 'henrique';
// calcAge(1991);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name:'Jonas',
//     age:30
// };

// const friend = me
// friend.age = 27;
// console.log('Friend: ', friend);
// console.log('Me: ', me);


//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const Jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age : 27,
};
const marriedJessica = Jessica;
marriedJessica.lastName = 'Davis';

// console.log('Before marriage: ', Jessica);
// console.log('After marriage: ', marriedJessica);

//copying objects

const Jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age : 27,
};

const jessicaCopy = Object.assign({}, Jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage: ', Jessica2);
console.log('After marriage: ', jessicaCopy);


