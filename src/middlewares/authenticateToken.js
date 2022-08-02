require('dotenv').config();
const jwt = require('jsonwebtoken');
const {getUserById} = require('../services/users');

// authenticate the token send by header on the request
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    const bearer = req.headers.authorization?.split(' ')[0];
    if (!token || bearer !== 'Bearer') return next({status:401, message:'Necesitas un token válido para acceder a este recurso'});
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , async (err, decoded) => {
        let user = decoded ;
        if (err) return next({status:403, message:'Token inválido'});
        const userExists  = await getUserById(user.UserInfo?.id);
        if (!userExists) return next({status: 400, message: 'El usuario no existe'});
        req.body.user = user.UserInfo;
        next();
    });
};

module.exports = authenticateToken;