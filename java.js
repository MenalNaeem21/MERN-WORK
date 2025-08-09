//datatype undefined,object,symbol

/*var myName//global
myName="menal"
//let myName="mini" // used within scope a block only
const pi=3.2
console.log(myName)
var sum = pi+pi
console.log(sum)
sum+=1 
console.log(sum) 
//using quotes
let mystr="i am a\"string\" in double quotes"
console.log(mystr)
mystr='i am a "double quotes string\\" inside a string'
console.log(mystr)
let newstr="first line\n\t\\secondline"
console.log(newstr)
console.log("my code")*/
 let age=24
console.log(age)
//object
const student ={
    fullName:"menal naeem",
    cgpa:2.5,
    age:21,
    isPass: true
}
//console.log(student)
//console.log(student.age)
//change a var
/*student.age+=1
//console.log(student.age)
const product={
    name: "pen",
    price: 20,
    rating:4.5,
    offer:5 
}

let a=5 
let b="5"
console.log(a===b)// to check type
//ternary op condition ? true o/p:false o/p
let Age =15
Age>=18? console.log("adult"):console.log("junior")*/
//alert("hello")//one time pop up
//let number = prompt("enter a number")
//if(number%5==0){
//console.log("number is multiple of 5")
//}
//else
//{
 //   console.log("number aint multiple of 5")
//}


//loops
//for
 /*for(let i=0;i<=5;i++){
console.log("value of i is; ",i)
 }
 let num = 58*/
/* while(i<=5)
{
    i++
}*/
/*
let i=20
do{
    console.log(i)
}
while(i<=10);
//for of in strings and arrays auto for loop
str="menal"
for(let i of str){
    console.log(i)
}
//for in for obj
let human={
    name:"menal",
    age:20,
    gender:"female",
    isStudent: true

}
for(let i in human){//ret keys
    console.log("key is ",i,"value= ",human[i])
}*/
//strings
let str='menal  '
price=9
length=str.length
console.log(length)
//template literal
let sentence= `'this is templaet literal'`
console.log(sentence)
let output=`the cost of  pen is ${price}`//string interpolation
console.log(output)
longStr="my name is menal i have a lappy"
trimstr=str.trim()
console.log(trimstr)
console.log(str.slice(2,4))//exclusive ending val to incl skip ending val
str.charAt(0)//prints char at that idx
/*userName=prompt("enter a username")
userName='@'+ userName + userName.length
console.log(userName)
*/
let marks=[14,7,8,2]
let avg=0
for(let x=0;x<marks.length;x++){
    avg+=marks[x]
}
console.log("the avg is ",avg/marks.length)
let items=[250,645,300,900,50]
let idx=0
for(let val of items){
    let offer=val/10
    items[idx]-=offer
    console.log(`value after offer i= ${items[idx]}`)
    idx++
}
 marks.push(35)
 console.log(marks)
 marks.pop()
 console.log(marks)
 console.log(marks.toString())
let marvel=["ironman","spiderman","antman","strange"]
let dc=["batman,shzam"]
//console.log(marvel.concat(dc))
//marvel.unshift("blackWidow")
console.log(marvel.slice(1 ,3))
console.log(marks.splice(1,2,100))//del two el add 100
console.log(marks.splice(1,0,101))// add 101 at 1st idx

marks.splice(3,1)//del el
let companies=["bloomberg","uber","google","netflix","ibm"]
companies.shift()//remover first el
companies.splice(0,1,"ola")
companies.push("amazon")