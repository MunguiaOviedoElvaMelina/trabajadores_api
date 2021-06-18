const router=require("express").Router()
let trabajadorcontroller=require("../controllers/trabajadorcontroller");
router.get("/",(req,res)=>{
   trabajadorcontroller.listar(req,res);
})
router.get("/:id",(req,res)=>{
    trabajadorcontroller.buscar(req,res);
})
router.delete("/:id",(req,res)=>{
    trabajadorcontroller.borrar(req,res);
})
router.post("/",(req,res)=>{
    trabajadorcontroller.agregar(req,res);
})
module.exports=router;