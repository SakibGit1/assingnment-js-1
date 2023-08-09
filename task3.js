function sortMaker(arr) {
    let arrSample = [];

    for(item of arr ){
        if(item < 0){
            return "Invalid Input";
        }
    }
    if (arr[0] === arr[1]) {
        return "equal";
    }

   else if (arr[0] < arr[1]) {
        let x = arr[0]
        let y = arr[1]
        const temp = x;
        x = y;
        y = temp;
        arrSample.push(x, y)
        return arrSample;
        // arrSample.push(arr[1],arr[0])
        // return [arr[1], arr[0]];
    }else{
        return arr;
        // arrSample = arr;
    } 
        // return arrSample; 
}
const arryNumbers = [1, 5];
console.log(sortMaker(arryNumbers));