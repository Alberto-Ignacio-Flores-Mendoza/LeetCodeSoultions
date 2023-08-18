


nums = [1,1,2]; // Input array
expectedNums = [1,1,2]; // The expected answer with correct length


const removeDuplicates =(nums) =>{
    let list = [];
    let k= 0;
    let i =0;
    for( i = 0; i<nums.length; i++){
        if(!list.includes(nums[i])){
            list.push(nums[i])
            nums[k] = nums[i]
            k++;
        }

    }
    return k
// list holds a list of non duplicates
console.log(list);
    
};


console.log(removeDuplicates(nums)); 
console.log(nums)
