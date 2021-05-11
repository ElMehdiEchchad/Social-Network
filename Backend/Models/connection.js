const mongoose = require('mongoose');

const URI = "mongodb+srv://root:"+process.env.MONGO_ATLAS_PW+"@cluster0.ao4lo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
    await mongoose.connect(URI,{ useCreateIndex: true,useNewUrlParser: true ,useUnifiedTopology: true})
    console.log("database has been connected");
}

module.exports = connectDB ;