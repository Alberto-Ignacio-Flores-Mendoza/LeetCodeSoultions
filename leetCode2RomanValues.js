const RomanValues = [
    {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,

    }
]

var romanToInt = function(s) {

    let count = 0;
    for(let i=0; i<s.length; i++){
        let CurrentValue = RomanValues[0][s[i]];
        if(i+1<s.length && RomanValues[0][s[i+1]] > CurrentValue){
            count -= CurrentValue;

        }else{
            count +=CurrentValue;
        }
    }

    return count
    
};

console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('XL'));
console.log(romanToInt('XC'));
console.log(romanToInt('CD'));
console.log(romanToInt('VI'));
console.log(romanToInt('MCMXCIV'));