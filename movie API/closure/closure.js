// function createGreeting() {
//     let greeting = 'Hello'; 

//     function greet(name) { 
//         console.log(greeting + ', ' + name); 
//     }

//     return greet; 
// }

// const sayHello = createGreeting(); 
// sayHello('Alice');
// sayHello('Bob'); 


function fname(){
    let username = "preeti";
    function inner(){
        console.log("inner",username);

    }
    return inner;
}
const myfun = fname();;
myfun();