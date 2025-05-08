//database schema 
import mongoose, {model, Schema} from "mongoose";
 import { MONGO_URI } from "../config.json";

mongoose.connect(MONGO_URI);


const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})
export const LinkModel = model("Links", LinkSchema);

export const ContentModel = model("Content", ContentSchema);

const TagSchema = new Schema({
    title: { type: String, required: true, unique: true }

}); 

export const TagModel = model("Tag", TagSchema)


