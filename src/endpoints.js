import { Router } from "express";
import { maiorNumero , IngressoCinema , CorPrimaria , freqCaracter } from "./services.js";
const server = Router();


server.get('/dia2/CorPrimaria/:cor', (req,resp) =>{
    try{
        const {cor} = req.params;
        const primaria = CorPrimaria(cor);
        resp.send({
            primaria: primaria
        });
      } catch(err){
        resp.send({
            erro:err.message
        })
    }
})

server.post('/dia2/ingressoCinema', (req,resp)=>{
    try{
        const{ valores : {qtdInteira , qtdMeias, diaSemana , nacionalidade}}= req.body;
        const total = IngressoCinema(qtdInteira, qtdMeias, diaSemana, nacionalidade );
        resp.send({
            total:total
        });
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/dia2/freqCaracter/:texto/caracter', (req,resp) =>{
    try{
        const{texto, caracter} = req.params;
        const freq =freqCaracter(texto,caracter);
        resp.send({
            freq:freq
        })   
    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post ('/dia2/maiorNumero',(req,resp) => {
    try{
        const numero = req.body;
        const maior  = maiorNumero(numero);
        resp.send({
            maior:maior
        })
    }catch (err) {
        resp.send({
            erro: err.mensage
        })
    }
})

export default server;