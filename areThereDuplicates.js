//function accepts a var number of args checks whethere there are any duplicates.
//areThereDuplicates(1, 2, 4) //false 
//areThereDuplicates(1, 2, 2) //true 

function areThereDuplicates(arguments) {
    //one Liner solution
    // return new Set(arguments).size !== arguments.length;

    //frequency counter solution 
    let obj = {}
    for(let val in arguments){
      obj[arguments[val]] = (obj[arguments[val]] || 0) + 1
      if(obj[arguments[val]]>1) return true
    }
    // for(let key in obj){
    //   if(obj[key] > 1) return true
    // }
    return false;

   
     // Two pointers
    //     args.sort((a,b) => a > b);
    //     let start = 0;
    //     let next = 1;
    //     while(next < args.length){
    //       if(args[start] === args[next]){
    //           return true
    //       }
    //       start++
    //       next++
    //     }
    //     return false

  }