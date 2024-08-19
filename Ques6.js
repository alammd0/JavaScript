
let number = 98 ; 

// check the number 
// 1. greater than 100 -> bad
// 2. smaller than 100 -> good 
// 3. smaller than 50 -> very bad

if (number > 100) {
    console.log("Bad");
} else {
    if (number < 50) {
        console.log("Very Bad");
    } else {
        console.log("Good");
    }
}
