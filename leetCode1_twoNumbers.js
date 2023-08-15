
var twoSum = function(nums, target) {
    let temp1 = 0;
    let temp2 = 0;
    


    for(let j=0; j<nums.length; j++){
    temp1=nums[j];
    console.log(j)

        for(let i=0; i<nums.length; i++){
            console.log(i);
            console.log(j)
        
            temp2 = nums[i]
             let result = temp1 + temp2;
             console.log(result);

            if(result === target){
            return `[${j},${i}]`;
            }
        
        }
    }
    
        
    };


    console.log(twoSum([2,7,11,15],9));