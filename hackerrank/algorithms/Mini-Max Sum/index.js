function miniMaxSum(arr) {
    // Write your code here
    //Ordenar
    var n, i, k, aux;
    var sumMax = 0;
    var sumMin = 0;

    n = arr.length;
 
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (arr[i] > arr[i + 1]) {
                aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }

    for(let i=0; i<(n-1); i++){
        sumMin += arr[i]; 
    }

    for(let i=(n-1); i>0; i--){
        sumMax += arr[i]; 
    }

    var result = sumMin + ' ' + sumMax;
    console.log(result);

}

//mejor solucion
function miniMaxSum2(arr){
    let max = arr[0];
    let min = arr[0];
    let sum =0;

    //encontrar el numero maximo y minimo en el arreglo
    for(let i=0; i<5; i++){
        if(max < arr[i]){
            max = arr[i];
        }

        if(min > arr[i]){
            min = arr[i];
        }
    
        sum += arr[i];
    }

    let maxSum = sum - min;
    let minSum = sum - max;

    let result = minSum + ' ' + maxSum;
    console.log(result);
}

miniMaxSum([1,2,3,4,5]);
miniMaxSum2([1,2,3,4,5]);