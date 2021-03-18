//Middleware for Admin Authentication 


const createError = require('http-errors');
const JWT = require('jsonwebtoken');

module.exports.checkAuth = (req, res, next) =>{
    console.log("req cookies", req.cookies);
    if(!req.cookies?.token) {
        throw new createError(401);
    } else {
        console.log("req cookies", req.cookies);
        JWT.verify(req.cookies.token, process.env.JWT_SECRET,
            (err, decoded) =>{
                if(err) {
                    throw new Error(err);
                }
                console.log(decoded);
                req.adminId = decoded.id;
                next();
            }); 
    }
}