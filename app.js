const express=require("express")
const app=express();
const mongoose=require('mongoose')
const url='mongodb://127.0.0.1/CRUD'

mongoose.connect(url,{useNewUrlParser: true})
const con =mongoose.connection

con.on('open',()=>{
    console.log('connected')
})

app.use(express.json())

const tilakRouter=require('./routes/tilak')
app.use('/tilak',tilakRouter)

app.listen(9000,()=>{
    console.log(`Server is running on the port`)
})
