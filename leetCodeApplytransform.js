var map = function(arr, fn) {

    let NewArr= []; 
    
    for(let i=0; i<arr.length; i++){

        NewArr[i]= fn(arr[i], i)

    }
    
    return NewArr
    
};

let arr=[1,2,3]
const plusone=(n)=>{return n+1}

console.log(map(arr,plusone));
