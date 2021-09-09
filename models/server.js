const express = require('express')
const cors = require('cors');
const conexionBD = require('../database/config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.connect();
        this.midlewares();
        this.routes();
        
        
    }
    async connect() {
        await conexionBD();
    }
    midlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use('/api/usuarios', require('../routes/usuarios.routes'))
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`)
        })
    }
    
}

module.exports = Server;