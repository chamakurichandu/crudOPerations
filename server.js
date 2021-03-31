const express =require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const { response } = require('express');
const routerUrl=require('./router/router');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true},()=>{
    console.log('Mongoose connected to server')
});

app.use(express.json());

app.use(cors());

app.use('/api',routerUrl)
const PORT=process.env.PORT||2000
app.listen(PORT,()=>{
    console.log(`server running at port no ${PORT}`)
})