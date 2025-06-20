const express=require ('express')
const router = express.Router()

router.get('/bebidas', (req, res)=>{
    res.json({menssaje:"Hola mundo"})
})

module.exports=router