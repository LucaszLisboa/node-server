const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key";

const generateToken = (id) => {
    return jwt.sign({ id }, secretKey, { expiresIn: 60 * 60 });
}

const verifyJWT = (req, res, next) => {
    let token = req.body.sessionID;
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, secretKey, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        req.session.usuarioID = decoded.userID;
        next();
    });
}

module.exports = { generateToken, verifyJWT };
