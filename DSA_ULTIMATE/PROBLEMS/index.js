// Q.1 Check if number is even or odd

function isEvenOdd(num){
 if(num % 2 == 0){
    return "Even"
 }
 return "Odd"
}
// console.log(isEvenOdd(17));
// console.log(isEvenOdd(18));
// console.log(isEvenOdd(222));

// Q.2 find the minimum value of given input values 

function findMinimum(x, y,z) {
    if(x < y && x < z){
        return `${x} is minimum among all three values`
    }
    else if(y < x && y < z){
        return `${y} is minimum among all three values`
    }
    else{
        return `${z} is minimum among all three values`
    }
}
// console.log(findMinimum(912,50,106));

// Q.3 find the minimum value of given input values 
