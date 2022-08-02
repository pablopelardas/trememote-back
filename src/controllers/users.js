const {getAllUsers: getAll, getUserById: getById} = require('../services/users');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await getById(req.params.id);
        res.send(user);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getAllUsers,
    getUserById
};