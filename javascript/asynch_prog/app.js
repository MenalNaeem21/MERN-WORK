//synchronous prog; in order exec, wait for first in line to exec
/*console.log("1")
console.log("2")
console.log("3")
//asynch; dont wait if instruct take too long to cmplt
const hello=()=>{
console.log("hello!")
}

setTimeout(hello,2000)// 2s =2000ms
console.log("4")
console.log("5")
*/

///callback->argument to other func//
function sum(a,b){
    console.log(a+b)
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}
//calculator(1,2,sum)// never run with () it will mean exec here
//calculator(3,2 ,(a,b)=>{
   // console.log(a+b)
    
//}
//)

// function getData(id,getNextData){
//     setTimeout(()=>{
//     console.log("data",id)
//     if(getNextData)
//    {
//      getNextData()
//    }
// },2000)
// }
// //callback hell//
// /*getData(1,()=>{ // cz cant send ()
//     getData(2,()=>{
//         getData(3)
//     })
// })*/

// //promises to solve callback hell// apis or others create we only handle
// //eventual cmpltion of task; its an obj
// const Getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//     console.log("im a promise")
//    //resolve("success") // to fullfil
//     reject("error smth wrong")// to  reject

// })
// }
// create usually we dont//
function getDataN(id,getNextData){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
    console.log("data",id)
     //   resolve("success")
    if(getNextData)
   {
     getNextData() 
   }
},5000)

    })
  
} 
// let result=getDataN(2345)
//how to use promise//
 //if fullfilled
// let promise=Getpromise()
// promise.then((res)=>{
//     console.log("promise fullfilled",res)
// })
// promise.catch((err)=>{ // by default param
//     console.log('rejected',err)
// })

function asynchFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 1")
            resolve("success")

        },4000)
    })
}

function asynchFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some other data 2")
            resolve("success")

        },4000)
    })
}
//chaining calling it inside then
console.log("fetching data1...")
//let a=asynchFunc1()
//other way
asynchFunc1().then((res)=>{
    console.log(res)
    console.log("fetching data2...")
asynchFunc2().then((res)=>{
    console.log(res)
})

})
