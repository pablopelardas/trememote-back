/* eslint-disable no-useless-catch */
const {User} = require('../models/index');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const createUserInDb = async (user) => {
    try{
        await User.create(user);
    }catch(error){throw error;}
};

const generateAccessToken = (user) => {
    return jwt.sign({
        'UserInfo':{
            'username': user.username,
            'email': user.email,
            'id': user.id,
        }
    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'});
};

const updateRefreshToken = async (user, errase=false) => {
    let token;
    errase
        ? token = ''
        : token = jwt.sign({
            'UserInfo':{
                'username': user.username,
                'email': user.email,
                'id': user.id,
            }
        }, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'});
    try{
        await User.update({refreshToken: token}, {where: {id: user.id}});
        return token;
    }catch(error){throw error;}
};

const verifyRefreshToken = (user) => {
    const token = user.refreshToken;
    let newToken;
    jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || user.email !== decoded.UserInfo.email) newToken = ({status:403, message: 'Token expirado'});
            else newToken = generateAccessToken(user);
        }
    );
    return newToken;
};


module.exports = {
    createUserInDb,
    generateAccessToken,
    updateRefreshToken,
    verifyRefreshToken
};