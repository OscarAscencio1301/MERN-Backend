const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario')

const getUsuarios = async(req, resp) => {
    const usuarios = await Usuario.find();
    resp.status(200).json({
        ok: true,
        msg: 'get',
        usuarios
    })
}

const postUsuarios = async(req, resp) => {
    const {nombre, correo, password, rol} = req.body;
    const usuario = Usuario({nombre, correo, password, rol});

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    await usuario.save();
    resp.status(200).json({
        ok: true,
        msg: 'post',
        usuario
    })
}

const putUsuarios =  async(req, resp) => {
    const {id} = req.params
    const {password, google, ...resto} = req.body

    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)
    resp.status(200).json({
        ok: true,
        msg: 'put',
        id,
        usuario
    })
}

const deleteUsuarios = async(req, resp) => {
    const {id} = req.params

    const usuario = await Usuario.findByIdAndDelete(id)
    resp.status(200).json({
        ok: true,
        msg: 'delete',
        usuario
    })
}

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}