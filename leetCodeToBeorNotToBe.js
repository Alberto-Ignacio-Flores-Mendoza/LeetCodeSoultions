var expect = function(val) {
    return{
        toBe: (val2) =>{
            if(val2 === val){
                return true
            }else{
                throw new Error('Not equal');
            }

        },
        notToBe: (val2) =>{
            if(val2 !== val){
                return true
            }else{
                throw new Error('equal');

            }
        }
    }
};
//expect(5).notToBe(5);
console.log(expect(5).toBe(5));
