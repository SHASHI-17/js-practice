// call apply bind - function borrowing or shareable methods

// 1. call

// let name1={
//     firstName:'shashi',
//     lastName:'kiran',
//     printFullName:function(){
//         console.log(this.firstName+" "+this.lastName);
//     }
// }

// let name2={
//     firstName:'Sachin',
//     lastName:'Tendulkar',
// }

// name1.printFullName.apply(name2);

// const printFullName=function(hometown,state){
//         console.log(this.firstName+" "+this.lastName+" from "+hometown +" , "+state);
//     }
// let name1={
//     firstName:'shashi',
//     lastName:'kiran',   
// }
// printFullName.call(name1,'gid','ap')

// // apply method only the difference is we have to pass the params in array

// let name2={
//     firstName:'Sachin',
//     lastName:'Tendulkar',
// }

// printFullName.apply(name2,['mum','mh']);

// // bind method
// // it will create copy - it will give a copy which can be invoked later 
// let printMyName = printFullName.bind(name2,"mum",'mh')
// console.log(printMyName);
// printMyName()


// 2. polyfill of bind method

// let name1 = {
//     firstName: 'shashi',
//     lastName: 'kiran',
//     // fn:idhar function jodh rhe takhi hame access mile 
// }

// const printname = function (hometown, state, country) {
//     console.log(this.firstName + " " + this.lastName, " , " + hometown + " , " + state + " , " + country);
// }

// // let printMyName = printname.bind(name1, 'mum', 'mh', 'india');
// // printMyName();

// Function.prototype.mybind = function (obj = {}, ...args) {
//     obj.fn = this;
//     return function (...args2) {
//         obj.fn(...args, ...args2)
//     }
// }
// Function.prototype.myCall = function (obj = {}, ...args) {
//     obj.fn = this;
//     obj.fn(...args)
// }
// Function.prototype.myApply = function (obj = {}, args = []) {
//     obj.fn = this;
//     obj.fn(...args)
// }

// let printMyName2 = printname.mybind(name1, 'mumbai', 'maharashtra');
// printMyName2('india');

// printname.myCall(name1, 'shashi', 'kiran', 'll')
// printname.myApply(name1, ['shashi', 'kiran', 'll'])

// pending polyfill of map filter and any one



// function Currying
// it means making a copy of a function in this case we made copy of [multiplyByTwo] and passed the arg 
// to get the answer

// 1st way bind
// let multiply = function (x,y){
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this,2,3);
// multiplyByTwo(2)
// let multiplyByThree = multiply.bind(this);
// multiplyByThree(2,3)

// 2nd way Closure
// let multiplyClosure = function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }
// let multiplyByTwo = multiplyClosure(2);
// multiplyByTwo(3)
// let multiplyByThree = multiplyClosure(3);
// multiplyByThree(2)



// prototype and prototypal inheritance
// prototype means whenver we create any objects automatically puts this into object and attaches to our object 
let arr = ['Shashi', 'Kiran']
// ek baar check krna arr.__proto__
// arr.__proto__
// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// Array.prototype
// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// Object.prototype
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// arr.__proto__.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// arr.__proto__.__proto__.__proto__
// null

// let object ={
//     name:'shashi',city:'Gid',getIntro:function(){
//         console.log(this.name+"  "+this.city);
//     }
// }
// let object2 ={
//     name:'kiran'
// }

//Not a good pratice but this is how object2 is inherting object 1 
//prototypal inheritence
// object2.__proto__=object;
// the name will be taken by object2 but city from object1
// object2
// {name: 'kiran'}name: "kiran"[[Prototype]]: Object
// object2.getIntro()
// index3.js:129 kiran  Gid
// undefined

// Event Bubbling and Event Capturing
// It is going upward in the default case

// document.querySelector('#grandparent').addEventListener('click',()=>{
//     console.log('Clicked on grandparent !');
// },true);
// document.querySelector('#parent').addEventListener('click',(e)=>{
//     console.log('Clicked on parent !');
//     // e.stopPropagation();
// },true);
// document.querySelector('#child').addEventListener('click',(e)=>{
//     console.log('Clicked on child !');
//     e.stopImmediatePropagation();
// },true);

// Event delegation

// document.querySelector('#category').addEventListener('click',(e)=>{
//     console.log(e.target.id);
//     if(e.target.tagName === 'LI') location.href='/'+e.target.id

// })
// document.querySelector('#form').addEventListener('keyup',(e)=>{
//     console.log(e);
//     if(e.target.dataset.uppercase !== undefined) e.target.value=e.target.value.toUpperCase()


// })


// Debouncing 

let counter = 0;
const getData = () => {
    console.log('fetching data', counter++);
}

let debounce = function (fn, d) {
    let timer
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
           fn()
        }, d)
    }
}

const betterfunction = debounce(getData, 300)
