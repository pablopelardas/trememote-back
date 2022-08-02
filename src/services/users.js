const {User, Post} = require('../models/index');

// Get all users
const getAllUsers = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const users = await User.findAll({
            include:[{
                model: Post,
                attributes: ['id', 'title', 'content', 'createdAt'],
            }],
            order:[[Post, 'createdAt', 'DESC']]
        });
        return users;
    } catch (error) {
        throw {status:500, message: 'Error al obtener los usuarios'};
    }
};

// Get by ID
const getUserById = async (id) => {
    // eslint-disable-next-line no-useless-catch
    const user = await User.findOne({
        where: {
            id
        },
        include:[{
            model: Post,
            attributes: ['id', 'title', 'content', 'createdAt'],
        }],
        order:[[Post, 'createdAt', 'DESC']]
    });
    if (!user) throw ({status:404, message: 'No se encontró el usuario'});
    return user;
    
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