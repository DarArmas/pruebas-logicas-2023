function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesin = 0;
    let orangesin = 0;

    for(let x of apples){
        if((a+x)>=s && (a+x)<=t) applesin++;
    }

    for(let x of oranges){
        if((b+x)>=s && (b+x)<=t) orangesin++;
    }
    
    return [applesin, orangesin];

}

function countApplesAndOranges2(s, t, a, b, apples, oranges){
    
    const appleRes = apples.map(num=> num + a).filter(num => num >= s && num <= t).length;
    const orangeRes = oranges.map(num=> num + b).filter(num => num >= s && num <= t).length;

    console.log(appleRes +'\n'+ orangeRes);

}


console.log(countApplesAndOranges(7,11,5,15, [-2, 2, 1], [5, -6]));
countApplesAndOranges2(7,11,5,15, [-2, 2, 1], [5, -6]);