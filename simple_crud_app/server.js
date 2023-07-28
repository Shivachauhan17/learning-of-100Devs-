const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'farmer-crop'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/' ,(request,response) => {
    db.collection('rappers').find().sort({likes:-1}).toarray()
        .then(response.render('index.ejs'),({info:data}))
        .catch(error => console.log(error))
})

app.post('/addRapper',(request,reponse)=>{
    db.collection('rappers').insertOne({stageName : request.body.stageName,
        birthName:request.body.stageName,likes:0
    })
        .then(result=>{
                console.log('rapper addded')
                response.redirect('/')
        })
        .catch(error=>{
            console.log(error)
        })
})

app.put('/addOneLike',(request,response)=>{
    db.collection('rappers').updateOne({stageName:request.body.stageNames,
    birthName:request.body.birthNameS,likes:request.body.likesS
    },{$set:{
        likes:request.body.likesS+1,
    }}
    ,{
        sort:{id:-1},
        upsert:false 
    })
    .then(result=>{
        console.log('added one like')
        reponse.json('Like added')
    })
    .catch(error=>console.log(error)) 
})

app.delete('/deleteRapper',(request,response)=>{
    db.collection('rappers').deleteOne({stageName: request.body.stageName})
        .then(result=>{
            console.log('deleted')
            response.json('Rapper Deleted')
        })
})

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})