/* print in a for loop sentences '... 17 C in 1 days ... 21 C in 2 days ... 23 C in 3 days ...'
    Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console
 */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
printForecast(data1);
printForecast(data2);
