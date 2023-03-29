function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = candles[0];
    var ocurences = 0;

    for(let candle of candles){
        if(candle > tallest) tallest = candle;
    }

    for(let candle of candles){
        if(candle === tallest) ocurences++;
    }


    console.log(ocurences);
    
}

birthdayCakeCandles([3,2,1,3]);

