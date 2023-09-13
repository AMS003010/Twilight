const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(400).send('Access denied,no token provided');
    }  
    jwt.verify(token,process.env.SECRET,(error,validToken) => {
        if (error) {
            return res.status(400).send({message: "Invalid Token"});
        } else {
            if (!validToken.isAdmin) {
                return res.status(403).send({message: "You are not authorized"});
            }
            req.user = validToken;
            next();
        }
    });
};