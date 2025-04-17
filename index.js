const express= require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/',(req,res,next)=>{
    console.log(req.body);
    
    console.log('data received')
    next();
})

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/homeadded',(req,res)=>{
    res.render('add-home');
})
app.listen(3000, () => {
    console.log('your serveris http://localhost:3000');
});