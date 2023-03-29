function gradingStudents(grades) {
    // Write your code here
    let digit1 = '';
    let digit2 = '';
    let closest = 0;
    let result = [];

    for(let grade of grades){
        if(grade !== 100){
            digit1 = grade.toString().charAt(0);
            digit2 = grade.toString().charAt(1);
            closest = parseInt(digit2) < 5 ? digit1 + '5' : parseInt(digit1)+1 + '0';
     
            if(((closest - grade) < 3) && (grade >= 38))  grade=closest;
        }      

        result.push(parseInt(grade));
    }

    return result;
}


//console.log(gradingStudents([73,67, 38,33]));
console.log(gradingStudents([
    84,
    94,
    21,
    0,
    18,
    100,
    18,
    62,
    30,
    61,
    53,
    0,
    43,
    2,
    29,
    53,
    61,
    40,
    14,
    4,
    29,
    98,
    37,
    23,
    46,
    9,
    79,
    62,
    20,
    38,
    51,
    99,
    59,
    47,
    4,
    86,
    61,
    68,
    17,
    45,
    6,
    1,
    95,
    95]));