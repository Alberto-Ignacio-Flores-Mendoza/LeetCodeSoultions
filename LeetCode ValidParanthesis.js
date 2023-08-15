var isValid = function(s) {
    
    let pO = []
    let temp = null;
    let char = null;

    for( let letter in s){
        char= s[letter]
        
        if(char === '(' || char === '[' || char === '{'){
            pO.push(s[letter])
        }

        else{
            if(pO.length === 0)
            return false;
            else{
                temp = pO[pO.length-1];
                if((char === ')' && temp ==='(') || (char === ']' && temp==='[')  ||(char === '}' && temp ==='{') ){
                    pO.pop();
                } 
                else{
                    return false
                }
            }


        }

    }

    if(pO.length === 0 && s.length>0)
    return  true
    else
    return  false



};

console.log(isValid('())'));