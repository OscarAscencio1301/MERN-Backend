const moongose = require('mongoose')
const conexionBD = async() => {
    try {
       moongose.connect(process.env.DBURL)
       console.log('BD Conectada')
        
    } catch (error) {
        console.log('Error al conectar con BD')
    }
}

module.exports = conexionBD;