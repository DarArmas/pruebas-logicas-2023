/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    
    let map = {};
    let pairs = 0;

    for(let number of ar){
        if(map[number]){
            map[number]++;
        }else{
            map[number] = 1;
        }
    }
    
    console.log(map);

    for(let number in map){
    
        if(map[number] > 1){
            if(map[number] % 2 == 0){
                pairs += map[number] / 2;
            }else{
                map[number]--;
                pairs += map[number] / 2;
            }
        }
    }

    return pairs;    

}


console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3,3, 3, 3]));