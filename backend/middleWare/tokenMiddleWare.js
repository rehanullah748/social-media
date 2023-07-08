const jwt = require("jsonwebtoken");
module.exports.tokenMiddleWare = (req, res, next) => {
    if(req.headers.authorization) {
    try {
        const token = req.headers.authorization;
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next();
    } catch (error) {
       return res.status(401).json({error: error.message}) 
    }
    }
    else {
        return res.status(401).json({msg: "invalid token"})
    }
};
