const mongoose=require('mongoose')
const mongoUrl="mongodb+srv://aniketsuryawanshi2728:oMkRIG0kxkc0adAL@cluster0.wdxtyay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectTomongo=()=>{
    mongoose.connect(mongoUrl);
    console.log("connected");
}
module.exports=connectTomongo;
