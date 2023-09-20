import mongoose from "mongoose";

// create a todo model with id, text, complete, default created_at and updated_at
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
}, { timestamps: true });


// make a ts interface for the todo model
export interface UserInterface extends mongoose.Document {
    username: string
    password: string
    avatar: string
}

// export the model
export const User = mongoose.model<UserInterface>("User", userSchema)