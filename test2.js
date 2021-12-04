/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // sort data in array data
  data.sort()
  // iteration for slice data in array where have same value
  for(var i = 0; i < data.length; i++){
    if (data[i] == data[i+1]){
      data.splice(i, 1); 
    }
  }
  return data
}

console.log(result(data));
