const  connectTomongo= require("./db");
try{
  connectTomongo();
}
catch(error){
  console.log("error :"+error)
}

const express = require('express')
const app = express();
app.use(express.json());
const port = 5000
const cors=require("cors");


app.use(cors())
app.use('/api/auth/',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
