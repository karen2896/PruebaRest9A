const app = require('./App/app')
const config = require('./App/config/configuracion')
const conexion =require('./App/config/conexion')
conexion.connect()

app.listen(config.PORT,()=>{
    console.log(`Aplicacion corriendo en le puerto ${config.PORT}`);
}) 