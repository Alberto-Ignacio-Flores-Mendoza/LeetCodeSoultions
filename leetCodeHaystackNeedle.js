var strStr = function(haystack, needle) {
    let index=0
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]==needle[index]){
            index++;
            if(index==needle.length){
                return i-(index-1)
            }
        }else{
            i=i-(index)
            k=0;
        }
    }
    return -1
};
let x = strStr("sawbutsad","sad");
console.log(x);