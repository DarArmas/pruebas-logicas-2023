// In this challenge, you are required to calculate and print the sum of the elements in an array,
// keeping in mind that some of those integers may be quite large.
// Function Description
// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.



function aVeryBigSum(ar) {
    var sum = 0;

  for(let number of ar){
      sum += number;
  }

  return sum;

}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));


/*
Se debe de usar long en lengaujes como c++:
long aVeryBigSum(vector<long> ar) {
    long s = 0;
    for (int i = 0; i < ar.size(); i++) s += ar[i];
    return s;
}

Esto no es necesario en javascript porque: 
Max integer size en c++: 2147483647
Max integer size en javascript: 9007199254740991

*/

//Solución oficial de hackerrank
function aVeryBigSum2(ar) {
    //la funcion reduce aplica una función a cada valor de un array (izq a derecha) para reducirlo a un único valor
    //a representa el monto acumulado
    return ar.reduce((a, b)=>a+b);
}

console.log(aVeryBigSum2([1000000001,1000000002,1000000003,1000000004,1000000005]));
