var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydb", {
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongoose connected");
}).catch((error)=>{
    console.log("error: " + error);
})