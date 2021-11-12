//given a sorted array of integers and a target avg, determine if there is a pair of values in the array where the average of the pair equals the target avg. There may be more than on epair that matches the avg target

//time o(n), space O(1)
//averagePair([1,2,3],2.5)//true
//averagePair([-1,0,3,4,5,6], 4.1)//false
//averagePair([],4) //false

function averagePair(array, num) {
  if (array.length === 0) return false;

  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let average = (array[start] + array[end]) / 2;
    if (average === num) return true;
    else if (average < num) start++;
    else end--;
  }
  return false;
}
