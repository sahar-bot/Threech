import jwt from "jsonwebtoken";

export function generateToken(username) {
    const jwtSecret = process.env.JWT_SECRET;
    const jwtExpires = process.env.JWT_EXPIRES_IN;
    const payload = {username: username};

    const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpires });

    return token;

}

export function verityToken(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.redirect("/auth/login");
    }
}