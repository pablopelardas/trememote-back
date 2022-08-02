const {Router} = require('express');
const {validate, userValidationRules} = require('../middlewares/validator');
const {registerUser, loginUser, handleRefreshToken, getUserAuth, logoutUser} = require('../controllers/auth');

const router = Router();

router.post('/login',loginUser);
router.post('/register', userValidationRules(), validate, registerUser);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logoutUser);
router.get('/', getUserAuth);

module.exports = router;