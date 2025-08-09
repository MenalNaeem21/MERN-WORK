// //area of triangle
// function areaOfTriangle(l, b) {
//     return (1.5 * (l * b))
// }
// const greetings = () => {
//     console.log("hi there!")
// }
// console.log(`this is greetings ${greetings}, and area of triangle with base 3 and height 4 is${areaOfTriangle(3, 4)}`)
// let car = {
//     brand: 'Honda',
//     model: 'Civis RS',
//     year: 2025
// }
// let numbers = [1, 2, 3, 4, 5, 15, 9, 25, 18, 10]
// numbers.map(number => console.log(number * number))
// //promise
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('all set')
//     }, 2000)

// })
// console.log('before resolving', p)
// setTimeout(() => {
//     console.log('after two secs', p)
// }, 2000)

// async function itWaits() {
//     let result = await p;
//     console.log("printing promise after await", result)

// }
// itWaits();

//fizzbuzz using filter
let nums = Array.from({ length: 15 }, (_, i) => i + 1)
let fizzBuzzArray = nums.map(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzBuzz'
    }
    else if (num % 5 === 0) {
        return 'buzz'
    }
    else if (num % 3 === 0) {
        return 'fizz'
    }
    else {
        return num
    }
})
//console.log(fizzBuzzArray)
// destructure 
let book = {
    author: 'menal',
    title: 'mimiskichinn'
}

let{author,title}=book //same as author=book.author
console.log(author,title)
//reverse a string
function reverseString(str){
    strList=[...str]
    for(i=strList.length;i>0;i--){
        console.log(strList[i])
    }
    
}
reverseString('hello')
// alternate
function reverseString(str) {
    return str.split('').reverse().join(''); //converts to array rverse it and join back
}

console.log(reverseString('hello'));  // Output: "olleh"
