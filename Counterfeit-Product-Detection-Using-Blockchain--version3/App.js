const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const homeRouter=require('./router/homeRouter')
const session = require('express-session');
require('dotenv').config();

// const session=require('./router/homeRouter')


mongoose.connect(process.env.MONGODB_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
});
const db=mongoose.connection;

db.on("error",()=>{console.log("Error");})
db.once("open",()=>{console.log("Connected");})




const app=express()

app.use(bodyParser.json());
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false
  }));
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.static('js'))
app.use('/',homeRouter)
// app.get('/',(req,res)=>{
//     res.send("Hiee")
// })
const PORT = process.env.PORT || 3000;

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});