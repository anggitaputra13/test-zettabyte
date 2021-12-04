/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // get total array
  let n = numbers.length-1; //because data have 0 so length mush -1
  // sum all data from n
  let total = Math.floor((n + 1) * (n + 2) / 2);
  // find the missing number by minus sumtotal with any data in array
  for(let i = 0; i < numbers.length; i++){
    total -= numbers[i];
  }

  return total;

}

console.log(result(numbers));
