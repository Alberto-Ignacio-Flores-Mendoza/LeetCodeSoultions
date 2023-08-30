var reduce = function(nums, fn, init) {
    


    if(nums.length===0){
        return init;
    }

    for(let i=0; i<nums.length; i++){
         init= fn(init,nums[i])
    }


    return init
};

let arr=[1,2,3,4]
const sum=(accum, curr)=>{return accum+curr}
let init =0
console.log(reduce(arr,sum,init));
