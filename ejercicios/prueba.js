

function mapExample(){
    var numbers = [1, 5, 10, 15];
    var doubles = numbers.map(function(x) {
       return x * 2;
    });
    
    var doubles = numbers.map((x) => x * 2);

    console.log(numbers);
    console.log(doubles);
    
    // doubles is now [2, 10, 20, 30]
    // numbers is still [1, 5, 10, 15]
}

mapExample();