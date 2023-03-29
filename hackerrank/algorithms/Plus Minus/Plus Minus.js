function plusMinus(arr) {
    let positives = [];
    let negatives = [];
    let zeros = [];
    
    for(let number of arr){
        if(number > 0){
            positives.push(number);
        }else if(number < 0){
            negatives.push(number);
        }else if(number === 0){
            zeros.push(number);
        }else{
            return "Error, ingresa un numero";
        }
     
    }

    let positivesProportion = (positives.length/arr.length).toFixed(6);
    let negativesProportion = (negatives.length/arr.length).toFixed(6);
    let zerosProportion = (zeros.length/arr.length).toFixed(6);

    return positivesProportion + '\n' + negativesProportion + '\n' + zerosProportion;

}

console.log(plusMinus([-4,3,-9,0,4,1]))
