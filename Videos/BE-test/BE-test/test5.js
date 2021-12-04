/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // initial variabel
  let n = words.length;
  data1 = words[0];
  let prefix = '';
  // looping for compare any data in array words
  for(let i=0; i<n ; i++){
    // reset value prefix each iteration
    prefix = ''; 
    // skip iteration 1 because prefix set default index 0 in array words
    if(i != 0){
      // get string next in array words
      data2 = words[i];
      // get the length of each string
      let n1 = data1.length, n2 = data2.length;
      // compare string
      for(let j=0, k=0; j < n1 && k < n2; j++, k++){
        // if string not same iteration done and get de prefix
        if (data1[j] != data2[k]) {
          break;
        }
        prefix += data1[j];
      }
      // set prefix value to data1
      data1 = prefix;
    }
  }
  return prefix;
}

console.log(result(words));
