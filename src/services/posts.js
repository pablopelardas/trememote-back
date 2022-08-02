const {Post} = require('../models/index');

// Get all posts
const getAllPosts = async (paginate) => {
    // eslint-disable-next-line no-useless-catch
    try {
        let options = {};
        if (paginate){
            options.limit = paginate.limit;
            options.offset = paginate.offset;
        }
        const posts = await Post.findAll(options);
        return posts;
    } catch (error) {
        throw error;
    }
};  

// Get by ID
const getPostById = async (id) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const post = await Post.findByPk(id);
        return post;
    } catch (error) {
        throw error;
    }
};

// Get by user id
const getPostsByUserId = async (user_id) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const posts = await Post.findAll({
            where: {
                user_id
            }
        });
        return posts;
    } catch (error) {
        throw error;
    }
};

// Create post
const createPost = async (post) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const newPost = await Post.create(post);
        return newPost;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    getPostsByUserId,
    createPost
};