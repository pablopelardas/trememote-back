const {User} = require('../models/index');

// Get all users
const getAllUsers = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw error;
    }
};

// Get by ID
const getUserById = async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        throw error;
    }
};

// Get user by field

const getUserFromDbByField = async(field, value) => {
    const user = await User.findOne({
        where: {
            [field]:value
        },
    });
    if (!user) return null;
    return user.dataValues;
};


module.exports = {
    getAllUsers,
    getUserById,
    getUserFromDbByField
};