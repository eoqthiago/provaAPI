import{Router} from 'express'

import  {dobro,somar, media, temperatura, tabuada} from './services.js'

const server = Router();

// Função do Dobro

server.get('/dobro/:numero', (req, resp) => {
    try{
        const numero = Number(req.params.numero);
        const x = dobro(numero);
        resp.send({
            x:x
        })
    }
    catch(err){
        resp.status(404).send({
            error:err.message
        })
    }
})

// Função da Soma

server.get('/somar', (req,resp) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        const x = somar(a,b);
        resp.send({
            x:x
        })
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
        
    }

})

// Função da Soma Post

server.post('/somar', (req,resp) => {
    try{
        const {a,b} = req.body;
        const x = somar(a,b);
        resp.send({
            x:x
        }) 
    }
    catch(err){
        resp.status(404).send({
            error:err.message
        })
    }

}) 

// Função da Media

server.post('/media', (req,resp) => {
    try{
        const {n1,n2,n3} = req.body;
        const x = media(n1,n2,n3);
        resp.send({
            x:x
        })   
    }
    catch(err){
        resp.status(404).send({
            error:err.message
        })
    }

})

// Temperatura 

server.get('/temperatura', (req,resp) => {
    try{
        const grau = req.query.grau;
        const x = temperatura(grau);
        resp.send({
            x:x
        })
    }
    catch(err){
        resp.status(404).send({
            error:err.message
        })
    }
})

// Tabuada

server.get('/tabuada', (req,resp) => {
    try{
        const numero = req.query.numero;
        const x = tabuada(numero);
        resp.send({
            x:x
        })
    }
    catch(err){
        resp.status(404).send({
            error:err.message
        })
    }
})

export default server