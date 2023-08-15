var isPalindrome = function(x) {
    
    let reverse = parseInt(x.toString().split("").reverse().join(""));

    if(x === reverse)
    return true
    else
    return false
    
};


console.log(isPalindrome(121))


