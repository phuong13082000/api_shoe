const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).send("Access denied no token provided");
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).send("Invalid Token");
    }
}

module.exports = auth;
