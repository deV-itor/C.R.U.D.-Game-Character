const express= require('express')
const rota= express.Router();

rota.get("/", (req,res)=>{});
rota.get("/:id",(req, res)=>{});
rota.post("/", (req, res)=>{});
rota.put("/:id",(req, res)=>{});
rota.delete("/:id",(req, res)=>{});
module.exports = rota;
