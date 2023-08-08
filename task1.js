function cubeNumber(number){
    if(typeof number !== 'number' || number <= 0 || !Number.isInteger(number)){
        return 'please give me a positive number'
    }
    else{
        const numbers = Math.pow(number, 3);
        return numbers;
    }

}
const example = 4;
console.log(cubeNumber(example));