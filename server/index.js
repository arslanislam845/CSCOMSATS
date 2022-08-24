var express = require('express');
const mongoose = require("mongoose")
const NewPost = require("./models")
const Books = require("./booksmodel")
const Users = require("./Usermodel")
const bodyParser = require("body-parser")
const cors = require("cors");

var app = express();

require("dotenv/config")
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000;
// const PORT=6000;


// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// app.post("/login", async (req, res) => {
//     const {  email,password} = req.body;
        

//     const NewBooks = new Books({  title,source,img})
//     try {
//         await NewBooks.save();
//         res.status(201).json(NewBooks );
//     } catch (error) {
//         res.status(409).json({ message: error.message });
        
//     }
// }) 

app.post("/signup", async (req, res) => {
    const {  username,email,password,confirmPassword} = req.body;
    const users = new Users({ username,email,password,confirmPassword})
    // Users.findOne({ email: email }, async (res,user)=>{
    //     if(user){
    //         res.status(409).json({ message: "Email already exists" });
    //     }
    //     else{
    //         try {
    //             await users.save();
    //             res.status(201).json(users).send("success");
    //         } catch (error) {
    //             res.status(409).json({ message: error.message });   
    //         }
    //     }
    // })
    try {
        await users.save();
        res.status(201).json(users).send("success");
    } catch (error) {
        res.status(409).json({ message: error.message });   
    }
}) 

app.get("/", async (req, res) => {
    try {
        const respons = await NewPost.find()
        //res.send(respons)
        // res.json(respons);
       return res.status(201).json(respons).send("success");
       
    } catch (error) {
        res.status(409).json({ message: error.message });       
    }
   
})


app.get("/books", async (req, res) => {
    try {
        const respons = await Books.find()
        //res.send(respons)
        // res.json(respons);
        return res.status(201).json(respons);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
   
})


app.post("/books", async (req, res) => {
    const {  title,source,img} = req.body;
        

    const NewBooks = new Books({  title,source,img})
    try {
        await NewBooks.save();
        res.status(201).json(NewBooks );
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}) 


app.post("/", async (req, res) => {
    const {  title,heading,source, course_content, books, slides, past_papers } = req.body;
        

    const NewestPost = new NewPost({ title,heading, source , course_content, books, slides, past_papers})
    try {
        await NewestPost.save();
        res.status(201).json(NewestPost );
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }

})
// connection with env file
mongoose.connect(process.env.CONNECTION_URL, {
    useUnifiedTopology: true,useNewUrlParser: true,
}).then(() => {
    console.log("connection successfull");
})
//.catch((err) => console.log("no connection!!"));



app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT} ........`);
});








