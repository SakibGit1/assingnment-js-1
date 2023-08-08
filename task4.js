function findAddress(obj){
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    const output = street +"," + house + "," + society;
    return output;
}

const objPoperty = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
};
console.log(findAddress(objPoperty));