function staircase(n) {
    // Write your code here
    var staircase = '';

    for (var i=1; i<=n; i++){

        for(var x=1; x<=n; x++){
            if(x <= n-i){
                staircase += ' ';
            }else{
                staircase += '#';
            }
        }

        if(i!==n) staircase += '\n';
    }
    console.log(staircase);

}

staircase(6);

