const express =require('express')
const express =require('express')
const app= express()
const mongodb=require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017'


app.use(express.json())
app.use(express.static('C:/Users/jssat/OneDrive/Desktop/Project/public'))
app.set('view engine','hbs')
app.set('views','C:/Users/jssat/OneDrive/Desktop/Project/views')
app.get('/',(req,res)=>
{
    res.render('index')
})

app.post('/search',(req,res)=>
{
    console.log(req.body)
    MongoClient.connect(url,{useNewUrlParser :true},(error,response)=>
{
    if(error)
    {
        return console.log('unable to connect to databse')
    }

    const db=response.db('Project')

    db.collection(req.body.lab).find({role:req.body.role}).toArray((e,r)=>
    {
        res.send(r)
    })

})
})
