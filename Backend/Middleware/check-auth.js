const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    var userId;
    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed",
            error: error,
        });
    }
};
