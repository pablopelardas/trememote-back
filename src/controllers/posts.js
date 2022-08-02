const {getAllPosts:getAll, getPostById:getById, getPostsByUserId: getByUser, createPost: create, updatePost: update} = require('../services/posts');
const {getUserById: getUser} = require('../services/users');

const getAllPosts = async (req, res, next) => {
    try{
        let paginate = req.body.paginate;
        const posts = await getAll(paginate);
        res.json(posts);
    }catch(err){
        next(err);
    }
};

const getPostById = async (req, res, next) => {
    try{
        const post = await getById(req.params.id);
        res.json(post);
    }catch(err){
        next(err);
    }
};

const getPostsByUserId = async (req, res, next) => {
    try{
        let paginate = req.body.paginate;
        const user = await getUser(req.params.id);
        if (!user) throw {status: 404, message: 'Usuario no encontrado'};
        const posts = await getByUser(req.params.id, paginate);
        res.json({posts, user: {id: user.id, username: user.username}});
    }catch(err){
        next(err);
    }
};

const createPost = async (req, res, next) => {
    try{
        const {title, content, user} = req.body;
        const postData = {title, content, user_id: user.id};
        const post = await create(postData);
        res.json(post);
    }catch(err){
        next(err);
    }
};

const updatePost = async (req, res, next) => {
    try{
        const {title, content, user} = req.body;
        let post = await getById(req.params.id);
        console.log(post);
        if(post.user_id !== user.id) throw {status: 401, message: 'Desautorizado, este post no te pertenece'};
        post.title = title;
        post.content = content;
        await post.save();
        res.json(post);
    }catch(err){
        next(err);
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    getPostsByUserId,
    updatePost,
    createPost
};