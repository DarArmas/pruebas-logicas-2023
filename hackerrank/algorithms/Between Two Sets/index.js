function getTotalX(a, b) {
    // Write your code here
   
    let result = [];
    let min = b[0];

    for(let number of b){
        if(number < min){
            min = number;
        }
    }


    for(let i = 1; i<=min; i++){ 
        if(i % a[0] == 0 && i % a[1] == 0 ){
            if(b[0] % i == 0 && b[1] % i == 0 && b[2] % i == 0) result.push(i);
        }
    }


   return result.length;


}


function getTotalX2(a, b) {
    // Write your code here
   
    let result = [];
    let min = b[0];
    let max = b[0];
    let multiples = [];
    let factors= [];
    
    for(let number of b){
        if(number < min){
            min = number;
        }

        if(number > max){
            max = number;
        }
    }

    

    for(let i=1; i<=min; i++){
        for(let j=0; j<a.length; j++){
            if(i % a[j] == 0){
                if(multiples.indexOf(i) === -1) multiples.push(i);
            } 
        }
    }

    for(let i=1; i<=max; i++){
        for(let j=0; j<b.length; j++){
            if(b[j] % i == 0){
                if(factors.indexOf(i) === -1) factors.push(i);
            } 
        }
    }

    result = multiples.filter(value => factors.includes(value));

   return [multiples, factors, result];


}

function getTotalX3(a,b){
    let results = [];
    let lcm, gcdR;

    lcm = a.length > 1 ? calculateLCM(...a) : a[0];
    gcdR = gcd(...b);  

  for(let i=lcm; i<=gcdR; i+=lcm){
      if(gcdR%i==0) results.push(i)
  }

  return results.length;

}

function calculateLCM(...arr){
    const gcd2 = (a, b) => {
        // Greatest common divisor of 2 integers
        if(!b) return b===0 ? a : NaN;
           return gcd2(b, a%b);
     };
     const lcm2 = (a, b) => {
        // Least common multiple of 2 integers
        return a * b / gcd2(a, b);
     }
     // Least common multiple of a list of integers
     let n = 1;
     for(let i = 0; i < arr.length; ++i){
        n = lcm2(arr[i], n);
     }
     return n;
}
 
const gcd = (...arr) => {
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
  };
// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }

//console.log(getTotalX([2,4], [16,32,96]));
//console.log(getTotalX2([2,4], [16,32,96]));
//console.log(getTotalX3([2,4], [16,32,96]));
console.log(getTotalX3([3,9,6], [36,72]));
//console.log(getTotalX3([2], [20,30,12]));