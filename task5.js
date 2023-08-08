function canPay(changeArray, totalDue){
    if(changeArray.length === 0){
        return 'please give me a valid array'
    }
    let sum = 0;
    for(let item of changeArray){
        // sum++;
        sum = sum + item;
    }
    if(sum >= totalDue){
        return true;
    } else{
        return false;
    }
}
const arrayTk = [1,5,5];
const potatoTk = 10;
console.log(canPay(arrayTk, potatoTk));

//--------------------//
 // way 2:

// function canPay(changeArray, totalDue) {
//     if (changeArray.length === 0) {
//         return 'Please give me a valid array';
//     } 
    
//     let sum = 0;
//     for (let item of changeArray) {
//         sum += item;
//     }

//     if (sum >= totalDue) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const arrayTk = [1, 5, 5];
// const potatoTk = 10;
// console.log(canPay(arrayTk, potatoTk));
