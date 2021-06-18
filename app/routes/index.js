const router=require("express").Router()
let trabajador=require("./trabajadores")
router.use("/trabajadores",trabajador)

module.exports=router;