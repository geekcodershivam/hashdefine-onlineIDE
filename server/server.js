const express=require('express')
const app=express();
let bodyParser=require('body-parser');
var cors=require('cors')
const port=process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

require(`${__dirname}/app/routes`)(app);
if(process.env.NODE_ENV==="production"){
  app.use(express.static("../client/build"));
}

app.listen(port,()=>{
  console.log(`server running at ${port}`)
})