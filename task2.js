function matchFinder(string1, string2) {
    
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
      return 'please enter a string'
    }
    else if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}
const sample ="Peter Parker";     //"John Doe","ohn"
const sample2 = "Pen";
console.log(matchFinder(sample, sample2));


//---------------------------//
// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return 'please enter a string';
//     }

//     if (string1.includes(string2)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const sample = "John Doe";
// const sample2 = "ohn";
// console.log(matchFinder(sample, sample2));
