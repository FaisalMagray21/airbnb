const express= require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/',(req,res,next)=>{
    console.log(req.body);
    
    console.log('data received')
    next();
})
app.listen(3000, () => {
    console.log('your serveris http://localhost:3000');
});