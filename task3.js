function sortMaker(arr) {
    for(item of arr ){
        if(item < 0){
            return "Invalid Input";
        }
    }
    if (arr[0] === arr[1]) {
        return "equal";
    }
    
    let arrSample = [];

    if (arr[0] < arr[1]) {
        arrSample.push(arr[1],arr[0])
        // return [arr[1], arr[0]];
    }else{
        arrSample = arr;
    } 
        return arrSample; 
}
const arryNumbers = [3, 1];
console.log(sortMaker(arryNumbers));