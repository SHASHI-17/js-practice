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

let name1 = {
    firstName: 'shashi',
    lastName: 'kiran',
    // fn:idhar function jodh rhe takhi hame access mile 
}

const printname = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastName, " , " + hometown + " , " + state + " , " + country);
}

// let printMyName = printname.bind(name1, 'mum', 'mh', 'india');
// printMyName();

Function.prototype.mybind = function (obj = {}, ...args) {
    obj.fn = this;
    return function (...args2) {
        obj.fn(...args, ...args2)
    }
}
Function.prototype.myCall = function (obj = {}, ...args) {
    obj.fn = this;
    obj.fn(...args)
}
Function.prototype.myApply = function (obj = {}, args = []) {
    obj.fn = this;
    obj.fn(...args)
}

let printMyName2 = printname.mybind(name1, 'mumbai', 'maharashtra');
printMyName2('india');

// printname.myCall(name1, 'shashi', 'kiran', 'll')
// printname.myApply(name1, ['shashi', 'kiran', 'll'])