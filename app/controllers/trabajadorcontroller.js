let trabajador=require("../models/trabajadores");
let equipo=require("../../db/equipo");
module.exports={
    listar:(req,res)=>{
        res.json("{mensaje:'Todos los trabajadores',Equipo:"+equipo.listar()+"}")
    },
    buscar:(req,res)=>{
        let persona = equipo.buscar(req.params.id)
        if(persona==null){
            res.json("{mensaje:'No se encontro el trabajador',Trabajador:'"+req.params.id+"'}") 
        }
        else
            res.json("{mensaje:'Datos del trabajador',Nombres:"+persona.Nombres+",Apellidos:"+persona.Apellidos+",No. de Trabajador:"+persona.NoTrabajador+",No. de Seguro:"+persona.NoSeguro+",Grupos:"+persona.Grupos+"}")
    },
    borrar:(req,res)=>{
        res.json("{mensaje:'Eliminar un trabajador',id:"+req.params.id+"}")
    },
    agregar:(req,res)=>{ 
        console.log(req.body)
        let id=req.body.id;
        let Nombres=req.body.Nombres;
        let Apellidos=req.body.Apellidos;
        let NoTrabajador=req.body.NoTrabajador;
        let NoSeguro=req.body.NoSeguro;
        let Grupos=req.body.Grupos;
        let Trabajador= new trabajador(id,Nombres,Apellidos,NoTrabajador,NoSeguro,Grupos)
        equipo.agregar(Trabajador)
        res.json("{mensaje:'Se agrego un nuevo trabajador',Nombres:'"+req.body.Nombres+"',Apellidos:'"+req.body.Apellidos+"',No. de Trabajador:'"+req.body.NoTrabajador+"',No. de Seguro:'"+req.body.NoSeguro+"',Grupos:'"+req.body.Grupos+"'}")
    }
}