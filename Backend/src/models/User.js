import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
        
    },
    password:{
        type: String,
        required: true,
    },
    bio:{
        type: String,
        default: "Hey there! I am using this app.",
    },
    profilePic:{
        type: String,
        default: "",
    },
    nativeLanguage:{
        type: String,
        default: "",
    },
    learningLanguage:{
        type: String,
        default: "",
    },
    location:{
        type: String,
        default: "",
    },
    isOnboarded:{
        type: Boolean,
        default: false,
    },
    friends: [{
        //the Array of friends will contain the ObjectId of the User model
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],

},{timestamps: true});
//createdAt, updatedAt
//For making the password secure, we will use bcryptjs to hash the password before saving it to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        console.error("Error hashing password:", error);
        next(error);
    }
});
//this is a method that will be used to compare the password entered by the user with the hashed password in the database
//this is written for login controller
userSchema.methods.comparePassword = async function (enteredPassword){
    const isPasswordCorrect = await bcrypt.compare(enteredPassword, this.password);
    return isPasswordCorrect;
}

const user = mongoose.model("User",userSchema);

//pre hooks are used to perform actions before or after certain events


export default user;