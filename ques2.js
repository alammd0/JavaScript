
let num1 = 5 ;

let num2 = 20; 

let sumodd = 0 ; 
let sumeven = 0 ;

for(let i = num1 ; i <= num2 ; i++){
    if(i % 2 == 0){
        console.log(i);
        sumeven += i;
        console.log(" even " + sumeven);
    }else{
        console.log(i);
        sumodd += i;
        console.log("Odd sum"+sumodd)
    }
}

console.log("Odd number sum = " + sumodd);
console.log("Even number sum = " + sumeven);