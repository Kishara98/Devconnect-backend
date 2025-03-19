const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

    require("dotenv").config();

    const User = require("../models/userSchema.js");

    async function userRegister(body) {
    try {
        const { userName, skills, gitHubLink, bio, password } = body;

        const secretKey = process.env.JWT_SECRET;

        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            throw new Error("User already exist");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
        userName,
        skills,
        gitHubLink,
        bio,
        password: hashedPassword
        });

        await user.save(); // Use await directly

        return {
        status: "success",
        message: "New user created successfully 👨",
        };
    } catch (error) {
        console.error("Error during user registration:", error);
        throw error;
    }
    }

    async function userLogin(req) {

        const { userName, password } = req.body;
        const user = await User.findOne({userName});
        if(!user) {
            throw new Error("User not found ⛔");
        } else {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if(!passwordMatch) {
                return {
                    statusCode: 401,
                    message: "Invalid credentials 🔞"
                }
            } 
            const token = jsonwebtoken.sign({userId: user._id}, process.env.JWT_SECRET)
            return {
                status: 'success',
                message: {
                    jwtToken: token
                },
                
            }
        }
    }
    
    module.exports = {
    userRegister,
    userLogin
    };
