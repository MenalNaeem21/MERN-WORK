const taskModel=require('../models/taskModel')
exports.getAllTasks=(req,res)=>{ // without using async prog
   taskModel.find() //returns a promise
    .then(tasks=>{
    res.json(tasks)
    })
   .catch(error=>{
        console.log("error in getAllTasks",error)
                 res.status(500).json({ error: "Something went wrong" })


    })
    

}