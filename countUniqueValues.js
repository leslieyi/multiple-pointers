//a function which accepts a SORTED array, and count the unique values in the array. There can be neg numbers but it will always be sorted 
//countUniqueValues([1,1,1,1,2]) //2
//countUniqueValues([1,2,2,5,7,7,99]) 

function countUniqueValues(array){
    if(array.length === 0) return 0;
    let i = 0
    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j]; 
        }
        return i + 1;
    }

    // let uniqueArr = new Set(arr)
    // return uniqueArr.size

}