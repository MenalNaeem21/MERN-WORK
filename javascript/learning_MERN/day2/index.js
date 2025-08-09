const express = require('express')
const { use } = require('react')
const app = express()
app.use(express.json())
// app.use((req,res,next)=>{
//     console.log(`${req.method} ${req.path}`)
//     console.log(Date.now())
//     next()
// }) //middleware
app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`)
     next();

})
//dummy data
let users =
    [{ id: 1, name: 'rohail' },
    {id:2,name:'menal'}]
    //get all users
    app.get('/users',(req,res)=>{
        res.json(users)
    })
    app.get('/users/:id',(req,res)=>{
        const user=users.find(u=>u.id==req.params.id)
        users ? res.json(user):res.status(404).send('User not found')
    })
    app.post('/users',(req,res)=>{
        const newUser={id: Date.now(), ...req.body}
        users.push(newUser)
        res.status(201).send('user added successfully')
    })
   app.delete('/del-user/:id',(req,res)=>{
    const userId=parseInt(req.params.id)
    const index=users.findIndex(u=>u.id===userId)
    if(index!==-1){
        users.splice(index,1)
        res.json({message:"user del successfully"})
    }
    else{
        res.status(404).send('no users exist with that id')
    }
   
   })
    app.put('/update-user/:id',(req,res)=>{
        const userid=parseInt(req.params.id)
        const user=users.find(u=>u.id===userid)
         if(!req.body.name){
        res.status(400).send("Bad request, no user name")
    }
        if(user){
             user.name=req.body.name
             res.json({message:"username updated successfully"})

        }
        else{
            res.status(404).send("user not found")
        }
       


   })

// 🎯 Challenge Task:
// Make a full "Tasks API":

// GET /tasks → get all tasks


// POST /tasks → add a task ({ title, completed })

// PUT /tasks/:id → update a task

// DELETE /tasks/:id → delete a task

// Use an in-memory array to store tasks.






app.get('/', (req, res) => {
    res.send('Welcome to day 2')

})
app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})