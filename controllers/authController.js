import User from "../models/User.js";
import bcrypt from "bcrypt";

class AuthController {
    async registration(req, res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne({username});

            if (candidate) {
                return res.status(400).json("User already exists");
            }

            const hashPassword = bcrypt.hashSync(password, 10);
            const user = new User({username, password: hashPassword});
            user.save();
            res.json("Success");
            
        } catch(e) {
            res.status(400).json(e);
        }
    
    }

    async login(req, res) {
        try {
            

        } catch(e) {
            res.status(400).json(e);
        }
    }
}

export default new AuthController();