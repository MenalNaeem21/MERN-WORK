//changing the state of obj
//in-line event handling in new html
let btn1 = document.querySelector("#btn1");
btn1func = (e) => {
  console.log(e,e.type); //event obj stores info e
  console.log("button 1 was clicked lesgooo");
  let a = 20;
  a++;
  console.log(a);
};
func2=()=>{
    console.log("this is handler 2 for button ")
}

//cant define multiper handler it will overwrite
//event listener can have multiple of em
btn1.addEventListener("click",btn1func)
btn1.addEventListener("click",func2)
btn1.removeEventListener("click",func2 )
let btn2=document.querySelector("#mode")
let curmode="light";
const darkMode=()=>{
    if(curmode=="light"){
    btn2.style.backgroundColor="black"
    btn2.style.color="white"
    curmode="dark"
    }
    else if(curmode=="dark"){
        btn2.style.backgroundColor="white"
    btn2.style.color="black"
    curmode="light"
    }

}
btn2.addEventListener("click",darkMode)