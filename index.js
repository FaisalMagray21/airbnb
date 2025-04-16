const express= require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/',(req,res,next)=>{
    console.log(req.body);
    
    console.log('data received')
    next();
})
app.get('/',(req,res)=>{
    res.send(`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/output.css" rel="stylesheet">

</head>
<body>
  <h1 class="text-3xl font-bold underline text-center text-pink-500">
    Hello world!
  </h1>
</body>
</html>`);
})
app.listen(3000, () => {
    console.log('your serveris http://localhost:3000');
});