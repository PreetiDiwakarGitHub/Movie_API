// javascript math object
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.1));
// console.log(Math.trunc(4.9));
// console.log(Math.pow(2,2));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-4));


// Asynchronous

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// },4000);
// console.log("three");
// console.log("four");


// callback

// let sum = (a,b,output)=>{
//     return output(a,b);
// }

// let product = (a,b)=>{
//     return a-b;
// }
// let answer = sum(2,3,product)
// console.log(answer);

// find

// let a = [4,1,2,3,3,3,12,3,4,,8,9,0];
// let num= (e)=>{
//     return e<4;
// }
// let answer = a.find(num);
// console.log(answer);

// let a = [1,2,3,4,5,6,7,8,9,9];
// let num = (e)=>{
//     return e==2;
// }
// let r = a.findIndex(num);
// console.log(r);

// let a = [1,2,3,4,5,6,7,8,9,9];
// let num = (e)=>{
//     return e<1;
// }
// let r = a.findIndex(num);
// console.log(r);


// foreach

// const a = [4,1,3,4,2,3,4,4];
// a.forEach((e)=>{
//     console.log(e*2);
// })

// this keyword

// const object = {
//     name:"preeti",
//     age:19,
//     sayHii(){
//         console.log(this.name,this.age);
//     }


// }
// object.sayHii();

// const object = {
//     name: "preeti",
//     age: 19,
//     sayHii(Name) {
//         console.log(this.name, this.age,Name);
//     }


// }
// object.sayHii("priyanka");


// let name = "Amit";
// function print(){
//     console.log(this.name);
// }
// print();

// var name = "Amit";
// function print(){
//     console.log(this.name);
// }
// print();





// var c = 0;
// function cr(){
//     return ()=>{
//         ++c;
//         console.log(c);
//     }
// }
// let re = cr();
// re();
// re();
// re();
// re();

// function getq(){
//     let user = "preeeti";
//     let pass = "12345";
//     let c=0;

//     return function(){
//         let cre = {
//             user1:user,
//             password:pass,
//         }
//         if(c%3==0){
//             count+=1;
//             return cre;
//         }
//     }
// }
// let res = getq();
// console.log(res());

function fname(){
    let username = "preeti";
    let c=0;

    return function(){
        let user1={
            user2:username,
        }
        if(c==2){
            c+=1;
            return user1;
        }
        c+=1;
        
    }
}
let r = fname();
console.log(r());
console.log(r());
console.log(r());
