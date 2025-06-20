const app = require('./App/app')
const config = require('./App/config/configuracion')

app.listen(config.PORT,()=>{
    console.log(`Aplicacion corriendo en le puerto ${config.PORT}`);
}) 