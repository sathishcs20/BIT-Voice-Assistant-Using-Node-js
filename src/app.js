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

