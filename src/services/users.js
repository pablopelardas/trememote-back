const {User, Post} = require('../models/index');
const {Op} = require('sequelize');

// Get all users
const getAllUsers = async (username, email, paginate) => {
    // eslint-disable-next-line no-useless-catch
    try {
        let options = {
            include:[{
                model: Post,
                attributes: ['id', 'title', 'content', 'createdAt'],
                required: true,
            }],
            order:[[Post, 'createdAt', 'DESC'], ['id', 'DESC']],
            distinct: true,
        };
        if (paginate){
            options.limit = paginate.limit;
            options.offset = paginate.offset;
        }
        if (username) options.where.username = {[Op.like]: `%${username}%`};
        if (email) options.where.email = {[Op.like]: `%${email}%`};
        const users = await User.findAndCountAll(options);
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
    return user.dataValues;
    
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