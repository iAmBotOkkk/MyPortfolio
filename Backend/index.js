
const express = require("express");
const {Contact} = require("./db");
const {input} = require("./Types");
const cors = require ("cors");

const app = express();

app.use(express.json());
app.use(cors());



app.post("/contact" , async function(req,res){
    const contact = req.body
    const payload = input.safeParse(contact)

    if(!payload.success){
        res.status(411).json({
            msg : "Wrong inputs"
        });
        return;
    }
    await Contact.create({
        Name : contact.Name,
        Email : contact.Email,
        Message : contact.Message
    }); 
    res.json({
        msg : "Thank You for contacting"
    });
    
});

app.get("/contacts", async function(req,res){
    
    const contacts = await Contact.find()
    res.json({
        contacts
    })
  
})   
app.listen(3000)


