const { response } = require("express")
const Rol = require("../models/rol")
const Usuario = require("../models/usuario")


const validarEmail = async(correo = '') => {
    const existeCorreo = await Usuario.findOne({correo})
    if(existeCorreo){
        throw new Error (`El correo ${correo}, ya esta registrado`)
    }
}

const validarRol = async(rol = '') => {
    const existeRol = await Rol.findOne({rol})
    if(!existeRol){
        throw new Error (`El rol ${rol}, no existe`)
    }
}

const validarId = async (id) => {
    const existeId = await Usuario.findById(id)
    if(!existeId){
        throw new Error(`El id ${id} no existe en la BD.`)
    }
}
module.exports = {
    validarEmail,
    validarRol,
    validarId
}