
// 1. Given a String , reverse  each word in the sentence

// let str = 'saare jaha se acha hindustaan hamara';

// const savedStr = str.split(" ").map((value)=>{
//     return value.split("").reverse().join("");
// });

// console.log(savedStr.join(' '));

// How to check if an object is an array or not ?

// function checkArray(elem){
//     return Array.isArray(elem);
// }

// console.log(checkArray([]));
// console.log(checkArray({}));

// empty an array in javascript
// var array = [1,2,3,4];
// // array.length=0
// // console.log(array);
// const newArray=array.concat(array);
// console.log(newArray);

// reverseNumber
// function reverseNumber(num){
//     // return Number(num.toString().split("").reverse().join("")) ;
//     let rev=0;
//     while(num!=0){
//         var rem = num %10;
//         rev = rev*10+rem;
//         num=Math.floor(num/10)
//     }
//     return rev
// }


// console.log( reverseNumber(567));
// console.log("madam".split('').reverse().join('') === 'madam'); palindrome

// console.log("bdac".split('').sort().join('')); word ko alphabetical word mein krna 

// pehla word ko capitalize krna
// function capitalize(str){
//     return str.split(" ").map(value=>{
//         return value.split('')[0].toUpperCase() + value.substring(1,value.length);
//     }).join(" ");

// }

// console.log(capitalize('hello bhai kaiso ho'));

// counting occuerences in a string
// function occurence(str) {
//     let obj = {};
//     str.split("").map(value => {
//         if (obj.hasOwnProperty(value) === false) {
//             obj[value] = 1
//         } else {
//             obj[value]++
//         }
//     })
//     return obj
// }

// console.log( occurence("hello"));
// function sumOfMembers(arr){
//     let sum=0;
//     arr.forEach(value=>{
//         sum+=value;
//         return sum
//     });
//     return sum;
// }


// console.log(sumOfMembers([1,2,3,4]));


// var arr=[1,'shashi',3,'dask',5]

// function notString(arr){
//     let sum=0;
//     arr.forEach(value=>{
//         if(typeof value ==='number'){
//             sum+=value
//         }
//     })
//     return sum;
// }
// console.log(notString(arr));

// var arr=[
//     {name:'shashi',gender:'male'},
//     {name:'niraj',gender:'female'},
//     {name:'pratish',gender:'female'},
//     {name:'biswajit',gender:'male'},
// ]
// console.log(arr.filter(value=>value.gender!=='male'));

// jaha se bola waha se print krna hai
// let arr=[1,2,3,4,5,6];
// n=4
// for (let i=arr.length-n ;i<arr.length;i++){
//     if(arr.length <= n) {console.log('out of range '); return}
//     console.log(arr[i]);
// }

// function freq(arr=[]){
//     let obj={};
//     arr.map(value=>{
//         if(obj.hasOwnProperty(value) === false){
//             obj[value]=1;
//         }else{
//             obj[value]++;
//         }
//     });

//     let maxFrequency = 0;
//     let mostFrequentNumber = null;

//     for (let key in obj) {
//         if (obj[key] > maxFrequency) {
//             maxFrequency = obj[key];
//             mostFrequentNumber = key;
//         }
//     }
//     return mostFrequentNumber;
// }


// console.log(freq([1,2,3,4,5,5]));


// function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }

// console.log(shuffle([1, 2, 3, 4, 5, 6]));

let arr=[1,2,1,2,4,4,5,6];
let arr2=[1,2,1,2,4,4,5,6,8,9,10];
console.log([...new Set(arr.concat(arr2))]);
