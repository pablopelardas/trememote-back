const {body, validationResult} = require('express-validator');

const userValidationRules = () => {
    return [
        body('username').exists().withMessage('Debe enviar un nombre de usuario').isAlphanumeric().withMessage('El nombre debe contener solo letras o números'),
        body('email').exists().withMessage('Debe enviar un email').isEmail().withMessage('El email debe tener formato válido'),
        body('password').isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    ];
};
const postValidationRules = () => {
    return [
        body('title').exists().withMessage('Debe enviar un título'),
        body('content').exists().withMessage('Debe enviar un contenido').isLength({min: 20}).withMessage('El contenido debe tener al menos 20 caracteres'),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next();
};

module.exports = {
    userValidationRules,
    postValidationRules,
    validate
};