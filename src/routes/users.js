const {Router} = require('express');
const {getAllUsers, getUserById} = require('../controllers/users');
const handlePaginate = require('../middlewares/pagination');

const router = Router();

//Get All
router.get('/', handlePaginate , getAllUsers);

// Get by ID
router.get('/:id', getUserById);

module.exports = router;