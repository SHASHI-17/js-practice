
// getName();
// console.log(x);
// var x=7;

// function getName (){
//     console.log('Namaste');
// }


// scope

// function a(){
//     var b=10;
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// a();


// closures  

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// outer()();

// setTimeout(()=>{
//     console.log('hello');
// },5000);

// console.log('world');

// reduce the last dance

// const arr=[1,12,23,4,6];

// const arr2=[
//     {name:"shashi",age:22},
//     {name:"kiran",age:22},
//     {name:"yadav",age:19},
// ]

// console.log(arr.reduce((acc,curr)=>{
//     if(curr > acc){
//         acc=curr
//         }
//     return acc
// },0));
// console.log(arr2.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age] = acc[curr.age]+1;
//     }else{  
//         acc[curr.age]=1;
//     }
//     return acc;
// },{}));

// const user = fetch('https://api.github.com/users/SHASHI-17')
// console.log(user);

// Promise and its chaining 

// const cart = ['shoes', 'lin', 'br'];

// createOrder(cart)
//     .then((orderId) => {
//         console.log(orderId);
//         return orderId;
//     })
//     .then((orderId)=>{
//         return proceedToPayment(orderId);
//     })
//     .then((paymentInfo)=>{
//         console.log(paymentInfo);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// function createOrder(cart) {
//     const pr = new Promise((resolve, reject) => {
//         if (!validateCard(cart)) {
//             const err = new Error("Invalid")
//             reject(err)
//         }
//         const orderId = '12345';
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId);
//             }, 5000)
//         }
//     })
//     return pr;
// }

// function proceedToPayment(orderId){
//     return new Promise((res,rej)=>{
//         res("Payment done Successfully")
//     })
// }

// function validateCard(cart) {
//     return true
// }

// promise api's

// const p1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("P1 Success");
//     },3000)
// });
// const p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("P2 Fails");
//     },4000)
// });
// const p3=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("P3 Success");
//     },5000)
// });

// Promise.any([p1,p2,p3])
// .then((res)=>  console.log(res))
// .catch(err=>console.log(err.errors));

// const p1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('JAI SIYA RAM !!');
//     },5000)
// })
// const p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('JAI SIYA RAM !!');
//     },10000)
// })

// async function getData(){
// //    const val1= await p1;
// //    console.log("Mein Q Ni Aa Raha");
// //    console.log(val1);

// //    const val2= await p2;
// //    console.log("Mein Q Ni Aa Raha 2");
// //    console.log(val2);

//    const res=await fetch('https://api.github.com/users/SHASHI-17')
// //    .then(res=>{
// //    res.json().then(res=>console.log(res))
// //    })
//    const data=await res.json();
//    console.log(data);
// }

// getData()

// function promise(){
//     p.then(res=>console.log(res))
//     console.log("Mein Q Ni Aa Raha");
// }

// // getData();
// promise()

// this keyword legendary for me
// 'use strict'
// let a=4
// console.log(this);
// function x(){
//     console.log(this.a);
// }
// x()
// window.x();

// const student={
//     name:'shashi',
//     x:function x(){
//         console.log(this.name);
//     }
// }

// const student2={
//     name:'kiran',
// }

// student.x()
// student.x.call(student2)

// const obj ={
//     a:10,
//     x:()=>{
//         console.log(this);
//     }
// }
// obj.x() ;// it will point to the globalObject- window


nexted 
const obj ={
    a:10,
    x:function(){
       const y=()=>{
        console.log(this);
       }
       y();
    }
}
obj.x() ;
