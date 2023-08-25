var createCounter = function(init) {
    let temp=init;
    return {
        increment:()=> {
            return init+=1;

        },
        decrement:()=> {
            return init-=1;
        },
        reset:()=>{
            init=temp
            return init;

        }
    }
    
};


const counter = createCounter(0);
let x= counter.increment()
console.log(x)
x= counter.increment()
console.log(x)
x=counter.decrement();
console.log(x)

