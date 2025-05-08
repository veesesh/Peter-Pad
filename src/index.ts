import express from "express";
import { ContentModel, UserModel } from "./db";
import jwt from "jsonwebtoken";
import {userMiddleware} from "./middleware"
import {JWT_PASSWORD} from "../config.json"

// const JWT_PASSWORD = "123121212"; 

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req,res) => {
    // TO DO: Zod validation and hash password

    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username: username,
            password: password
        }) 

        res.json({
            message: "User signed up"
        })
        // check e, there might me other reasons to 
        /*
        1. Status 200 - Signed up 
        2. Status 411 - Error in inputs
        3. Status 403 -  User already exists with this username
        4. Status 500 - Server error
        */
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
})


app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id //userid 
        }, JWT_PASSWORD )

        res.json({
            token
        })
    } else {
        // - 403 - Wrong email password - 500 - Internal server error
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

app.post("/api/v1/content",userMiddleware, async (req,res) => {
    // create 4 inputs // create content table 
    const link = req.body.link;
    const type = req.body.type;  
   await ContentModel.create({
        link, type, 
        //@ts-ignore {TODO}
        userId: req.userId, 
        tags: []
    })

    res.json({
        message: "Content Added"
    })
})


app.get("/api/v1/content", userMiddleware, async (req,res) => { 
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId, 
    }).populate("userId", "username")

    res.json({
        content
    })


})

app.delete("/api/v1/content", async (req,res) => {
    const contentId = req.body.contentId; 
    await ContentModel.deleteMany({
        contentId, 
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })

})
app.post("api/v1/brain/share", async (req,res) => {


})
app.get("/api/v1/brain/:shareLink", (res,req)=> {
    
})

app.listen(3000);