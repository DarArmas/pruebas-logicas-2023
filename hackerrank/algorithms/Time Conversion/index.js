function timeConversion(s) {
    // Write your code here
    let result = '';
    let hour = parseInt(s.substr(0,2));
    let afternoon = s.substr(8,2) === 'PM' ? true : false;

    // if(hour !== 12){
    //     if(afternoon) hour += 12;
    // }else{
    //     if(!afternoon) hour -= 12;
    // }

    if(hour !== 12 && afternoon) hour += 12;
    if(hour == 12 && !afternoon) hour -= 12;

    hour = hour < 10 ? '0'+hour.toString() : hour.toString();  
     
    result = hour + s.substr(2,6);

    console.log(result);
}

timeConversion('12:00:00AM');