const client = require('../config/prisma-config');
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');


exports.register = async(req, res, next) => {
   try{
     const { email, password } = req.body; 
     const hashedPassword = await bcrypt.hash(password, 12);
     const newAdmin = await client.admin.create({
         data:{
         email, password: hashedPassword}
     })
     res.status(201).json({message: "Admin Created"});
   } catch(err) {
       next(err);
   }
};

exports.login = async(req, res, next) => {
    try{
      const { email, password } = req.body; 
      const admin = await client.admin.findUnique({
          where: { email },
      });
      if(!admin)
        { 
            throw createError(401, 'Wrong credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if(!isPasswordValid){
            throw createError(401, "Wrong credentials");
        }
        const token = JWT.sign({id: admin.id}, process.env.JWT_SECRET, { expiresIn: '1h'});
        res
        .status(200)
        .cookie('token', token, { httpOnly: true})
        .json({token, adminId: admin.id});
    } catch(err) {
        next(err);
    }
} 

