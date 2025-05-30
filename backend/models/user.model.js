import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type : String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required: true
        },
    name: {
        type: String,
        required: true
    },
    lastlogin: {
        type: Date,
        default: Date.now
    },
    isverified: {
        type: Boolean,
        default: false
    },
    resetpasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationTokenExpiresAt: Date,
}, {timestamps: true}
);


export const User = mongoose.model("User", userSchema);