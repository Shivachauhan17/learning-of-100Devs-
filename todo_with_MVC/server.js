const express=require('express')
const app=express()
//const connectDB=require('./config/databse')
const homeRoutes=require('./routes/home')
const todoRoutes=require('./routes/todos')

//require('dotenv').config({path:'./config/.env'})

//connectDB()

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',homeRoutes)
app.use('/todos',todoRoutes)
let PORT=8000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})