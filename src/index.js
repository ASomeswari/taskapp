const express =require('express')
require('./db/mongoose')
const User  =require('./models/user')
const app = express()
const port = process.env.PORT || 2000

app.use(express.json())

app.post('/user',async(req,res) =>{
   const user = new User(req.body)
   //console.log(req.body)
   //res.send('testing')
   try{
       await user.save()
       res.status(201).send(user)
   } catch (e) {
       res.status(400).send(e)
   }

})

app.get('/user',async(req,res) => {
    try{
        const user =await User.find({})
        res.send(user)
    } catch(e){
        res.status(500).send()

    }
    
})

app.get('/user/:id',async(req,res) =>{
    const _id = req.params.id
    try{
        const users =await User.findById(_id)
        if(!users){
            return res.status(404).send()
        }
        res.send(users)
    }catch(e) {
        res.status(500).send()
    }
})

app.patch('/user/:id',async(req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates=['name','email','branch','password','phonenumber','rollno','dateofyear']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid operation'})
    }
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runvalidator:true})
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }catch(e){
        res.status(400).send(e)

    }
})

app.delete('/user/:id',async(req,res) => {
    try{
        const user  =await User.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    }catch(e) {
        res.status(500).send(e)
    }
})

app.listen(port,() => {
    console.log('server is on port'+port)
})