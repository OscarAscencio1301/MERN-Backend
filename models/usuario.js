const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es Obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es Obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es Obligatorio']
    },
    imagen: {
        type: String
    },

    rol: {
        type: String,
        required: true,
        enum: ['rol1', 'rol2', 'rol3']
    },

    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }
})

UsuarioSchema.methods.toJSON = function () {
    const {password, __v, ...info} = this.toObject();
    return info;
}


module.exports = model('Usuario', UsuarioSchema);