const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()


let db,



app.get('/' ,(request,response) => {
    db.collections('rappers').find().sort({likes:-1}).toarray()
        .then(response.render('index.ejs'),({info:data}))
        .catch(error => console.log(error))
})

app.post('/addRapper',(request,reponse)=>{
    db.collections('rappers').insertOne({stageName : request.body.stageName,
        birthName:request.body.stageName,likes:0
    })
        .then(result=>{
            console.log(result=>{
                console.log('rapper addded')
                response.redirect('/')
            })
        })
        .catch(error=>{
            console.log(error)
        })
})

app.put('/addOneLike',(request,response)=>{
    db.collections('rappers').updateOne({stageName:request.body.stageNames,
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
    db.collections('rappers').deleteOne({stageName: request.body.stageName})
        .then(result=>{
            console.log('deleted')
            response.json('Rapper Deleted')
        })
})

const PORT = 8000
app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})