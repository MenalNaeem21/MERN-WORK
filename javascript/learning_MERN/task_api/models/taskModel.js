const moongose=require('moongose')
const taskSchema=new moongose.Schema({
    title:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true

    },
})
const taskModel=moongose.model('taskModel',taskSchema)
module.exports={taskModel,taskSchema}