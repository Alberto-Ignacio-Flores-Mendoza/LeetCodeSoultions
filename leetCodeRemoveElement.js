var removeElement = function(nums, val) {
    let i=0;
    let k=0
    for(i=nums.length; i>=0 ;i--){
        
        if(nums[i]===val){
            nums.splice(i,1)
        
        }
        else{
            k++
        }
    }



    return k;
    
};
nums= [3,2,2,3]
console.log(removeElement(nums,3))
console.log(nums)