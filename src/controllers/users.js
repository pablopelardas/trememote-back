const {getAllUsers: getAll, getUserById: getById} = require('../services/users');

const getAllUsers = async (req, res, next) => {
    try {
        let username = req.query.username;
        let email = req.query.email;
        let paginate = req.body.paginate;
        const users = await getAll(username, email, paginate);
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