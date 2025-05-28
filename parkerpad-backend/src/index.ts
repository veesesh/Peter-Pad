import express from "express";
import { ContentModel, LinkModel, UserModel } from "./db";
import jwt from "jsonwebtoken";
import {userMiddleware} from "./middleware"
import {JWT_PASSWORD} from "../config.json"
import { random } from "./utils";
import cors from "cors";

// const JWT_PASSWORD = "123121212"; 

const app = express();
app.use(express.json());
app.use(cors());

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

app.delete("/api/v1/content", userMiddleware, async (req,res) => {
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

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
            const existingLink = await LinkModel.findOne({
                //@ts-ignore
                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
            const hash = random(10);
            await LinkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: hash
            })

            res.json({
                hash
            })
    } else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink; // okay

    const link = await LinkModel.findOne({
        hash
    });
// power of aggregation 3 separate sequential db request   
    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        console.log(link)
        // link can be null so early return; 
        return;
    }
    // userId if exists; need to find it's brain
    const content = await ContentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })

})

app.listen(3000);