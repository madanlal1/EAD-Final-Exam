const express=require('express')
const app=express();
const mongoose=require('mongoose')
const cors = require('cors')

// middlewares
const Controller=require("./Controller/Controller")
const middelware=require('./middelware/UserMid')
app.use(cors())
app.use(express.json())

// connecting mongodb
mongoose.connect('mongodb://127.0.0.1:27017/ead7', () => {
    console.log('database connected successfully.');
})

// api's
// app.post('/signup',Controller.insert);
// app.get('/products',middelware.isAuthenticate,Controller.getAll);
app.get('/delete/:id',middelware.isAuthenticate,Controller.Delete);
app.get('/find/:id',middelware.isAuthenticate,Controller.find);
app.post('/update/:id',middelware.isAuthenticate,Controller.Update);
// app.post('/signin',Controller.signin)

// server is listening on port 8000
app.listen(8000,function(){
    console.log("Server is listening at 8000")
})