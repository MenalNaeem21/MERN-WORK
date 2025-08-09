//prototype:ref to an obj
const student={
    name:"menal",
    age:21,
    marks:95,
    getMarks:function(){
        console.log("marks = ", this.marks)
    }
   
}
const employee={
    calctax(){
        console.log("tax rate is 10%")
    }
}
const tobby={
    salary:85000,
    calctax(){
        console.log("tax rate is 20%") // obj and proto having same method; obj method will be used
    }

}
//tobby.__proto__= employee //set prototype;emp is protoype of tobby
let kobby=Object.create(student)


class car{
    constructor(brand,avg,name){
        console.log("creating obj")
       this.brand=brand
        this.avg=avg
        this.name=name
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}
let carObj=new car("honda",12)
//inheritance
class sedan extends car{
    constructor(brand,avg,name,modelNo){ // must use super to avoid error ad invoke parent' constructor
        super(brand,avg,name)
        this.modelNo=modelNo
       
    }
    run(){
        super.start()
       // cant access like this start()
        console.log("car is running")
        super.stop()
    }
    model(){
        console.log("its a sedan!")
    }
}
let civic=new sedan("honda",12,"civic",2019)


//practice///
class user{
    constructor(name,email){
        this.name=name
        this.email=email
    }
  
    viewData(){
        console.log("your name is, ",this.name)
        console.log("your email is," ,this.email)
    }

}
let userObj=new user("menal","menalnaeem21@gmail.com")
userObj.viewData()

class admin extends user{
    constructor(name,email){
        super(name,email)
    }
    editData(userObj,newName,newEmail){
        userObj.name=newName
        userObj.email=newEmail
    
        
    }
}
let adminObj=new admin("admin","admin@123")
console.log("Before editing:");
userObj.viewData();
adminObj.editData(userObj,"rohail","rohail@123")
console.log("After editing:");
userObj.viewData();

//error handling//
let a=5,b=8
console.log("a = ",a)
console.log("b = ",b)
console.log("a+b =",a+b)
try{
    console.log("a+b = ",a+c)}
    catch(err){
        console.log(err)

    }
console.log("a+b =",a+b)
console.log("a+b =",a+b)