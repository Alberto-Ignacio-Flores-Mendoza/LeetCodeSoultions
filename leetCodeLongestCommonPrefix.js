var longestCommonPrefix = function(strs) {
    
    let prefix = "";
    let position = 0;
    


    for(let i=0; i < strs.length; i++){
        //checks each word 
        let flag=true;
        console.log(flag)   
        for(let j=0; j< strs[i].length; j++){
            
            let temp2=strs[i][j]

            for(let x=0; x<strs.length; x++){
                if(temp2 != strs[x][j]){
                    flag=false;
                
                }
                
            }

            if(flag){
            
                if(position!=j){
                    prefix= prefix+""+strs[i][j];
                    position++;
                }
            

            
            }
        

        }
        
    
    

    }

    return prefix;
};



console.log(longestCommonPrefix(['flooht', 'flooer', 'floof', 'floof']))

console.log(longestCommonPrefix(["aa","aa"]))




