const { Router } = require('express');
const { check } = require('express-validator');
const { getUsuarios, postUsuarios, deleteUsuarios, putUsuarios } = require('../controllers/usuarios.controllers');
const { validarEmail, validarRol, validarId } = require('../helpers/validarDB');
const validarCampos = require('../middlewares/validarCampos');
const router = Router();


// Rutas
router.get('/', getUsuarios)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo').custom(validarEmail).isEmail(),
    check('password', 'El password es obligatorio').isLength({min: 6, max: 12}),
    check('rol').custom(validarRol),
    validarCampos
], postUsuarios)


router.put('/:id', [
    check('id', 'No es un ID de la BD').custom(validarId).isMongoId(),
    check('rol').custom(validarRol),
    validarCampos
], putUsuarios)

router.delete('/:id',[
    check('id', 'No es un ID de la BD').custom(validarId).isMongoId(),
    validarCampos
], deleteUsuarios)


module.exports = router