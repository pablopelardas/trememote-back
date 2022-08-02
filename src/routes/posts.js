const {Router} = require('express');
const { getAllPosts, getPostById, getPostsByUserId, createPost, updatePost } = require('../controllers/posts.js');
const {validate, postValidationRules} = require('../middlewares/validator.js');
const  authenticateToken  = require('../middlewares/authenticateToken.js');
const handlePaginate = require('../middlewares/pagination');

const router = Router();

//Get All
router.get('/', handlePaginate, getAllPosts);

// Get by ID
router.get('/:id', getPostById);

// Get by user ID
router.get('/:id/posts', getPostsByUserId);

// Create post
router.post('/', authenticateToken, postValidationRules(), validate ,createPost);

// Update post
router.put('/:id', authenticateToken, postValidationRules(), validate, updatePost);

module.exports = router;