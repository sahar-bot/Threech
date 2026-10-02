import { response } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

class AuthController {


    getRegistration(req, res) {
        try {
            res.render("registration");
        } catch(e) {
            res.status(500).json(e);
        }
    }

    getLogin(req, res) {
        try {
            res.render("login");
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async registration(req, res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne({username});

            if (candidate) {
                // res.status(400).json("User already exists");
                return res.status(400).render("registration", {error: "User already exists"});
            }

            const hashPassword = bcrypt.hashSync(password, 10);
            const user = new User({username, password: hashPassword});
            user.save();
            res.redirect("/auth/login");
            
        } catch(e) {
            console.log(e);
            res.status(500).render("registration", {error: "Something went wrong."})
            
        }
    
    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});
            console.log(user);
            
            if (!user) {
                // return res.status(400).json("User doesn't exist");
                return res.status(400).render("login", {error: "User doesn't exist"});
            }

            const validPassword = bcrypt.compareSync(password, user.password ,10);
            if (!validPassword) {
                return res.status(400).render("login", {error: "Password is wrong"});
            }  

            res.redirect("/");

        } catch(e) {
            res.status(500).render("login", {error: "Something went wrong"});
        }
    }
}

export default new AuthController();