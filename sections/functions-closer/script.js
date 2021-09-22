'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 200) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

// 2 episode
const flight = 'LH234';
const henrique = {
  name: 'Henrique Dias',
  passport: 1234234255,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  // if (passenger.passport === 1234234255) {
  //   alert('Checked In');
  // } else {
  //   alert('Wrong Passport!');
  // }
};

checkIn(flight, henrique);
console.log(flight);
console.log(henrique);

// Call Back functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);
['Henrique', 'Jonas', 'Martha'].forEach(high5);

//----------------------------------------------------------------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Henrique');

//challenge trying to rewrite the function above in arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Henrique');
