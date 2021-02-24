const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/sensimailya", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true

}).then(()=>{
    console.log("connect successful...")
}).catch((err)=>{
    console.log("error")
})