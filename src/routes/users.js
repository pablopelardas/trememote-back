const {Router} = require('express');
const {getAllUsers, getUserById} = require('../controllers/users');

const router = Router();

//Get All
router.get('/', getAllUsers);

// Get by ID
router.get('/:id', getUserById);

module.exports = router;