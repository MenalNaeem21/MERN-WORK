//window obj -> global obj console log is a part of it
//window.console.log("hello")
//console dir for special purp like doc
//console.dir(document.head)
/*let id=document.getElementById("mybutton")
console.dir(id)
console.dir(document.getElementsByClassName("weather"))//html collection like an array
 console.dir()
 let para=document.getElementsByTagName("p")
 console.dir(para)
 //best one can pass anything
 let firstele=document.querySelector("p")// returns first matching element
 console.dir(document.querySelectorAll("p"))//node list
console.dir(document.querySelector(".myclass"))//use . with class and hash with id
console.log(firstele)
console.dir(document.body.firstElementChild)//first child will be text
console.dir(document.querySelector("div").children)
*/
/*let div= document.querySelector("div")
console.dir(div)
console.dir(div.innerText)// can change from this too
console.dir(div.innerHTML)
console.dir(div.textContent)
let h2=document.querySelector("h2")
console.dir(h2)
console.dir(h2.innerText=h2.innerText+" apna college")
console.dir(h2.innerText)
let newdiv=document.querySelectorAll(".box")
console.log(newdiv)
newdiv[0].innerText="new value"
let div
for(div=0;div<=2;div++){
newdiv[div].innerText=`new value is ${div}`
}
*/
//style attributes with js
let div= document.querySelector("div")
console.log(div) 
let id =div.getAttribute("id")
console.log(id)
let para=document.querySelector("p")
console.log(para.setAttribute("class","paragraph"))

let d=document.querySelector("div")
div.style.backgroundColor="green"
//insert elements
let newbtn=document.createElement("button")
newbtn.innerText="click me"
newbtn.style.backgroundColor="red"
newbtn.style.color="white"
console.log(newbtn)
document.querySelector("body").prepend(newbtn)
//add button in the end div
//let Div=document.querySelector("div")
//Div.append(newbtn)
//at the start of div
//div.prepend(newbtn)
// add before/after the div
//div.before(newbtn)
let heading= document.createElement("h1")
heading.innerHTML="<i>new heading</i>"
//para.prepend(heading)
//document.querySelector("body").prepend(heading)
//del el
//para.remove()
para.getAttribute("class")
// it will overwrite the exisiting class
para.setAttribute("class","newclass")
//class list
para.classList.add("paragraph")//use remove to remove it
