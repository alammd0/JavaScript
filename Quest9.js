

// map Method

let arr = [1, 2, 3, 4, 5] ;

let newArr = arr.map(pow)

console.log(newArr);

function pow(num){
    return Math.pow(num, 2);
}