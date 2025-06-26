const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

mongoose
.connect(process.env.MONGO_URI)
.then(() =>{
    console.log("MongoDb Connected");
})

 const ContactSchema = mongoose.Schema({
    Name : String,
    Email : String,
    Message : String
})

const Contact = mongoose.model("Contact" , ContactSchema)

module.exports = {
    Contact
}
