const { Schema, model} = require('mongoose')

const RolSchema = Schema({
    rol: {
        type: String,
        required: true
    }
})


module.exports = model('Role', RolSchema);