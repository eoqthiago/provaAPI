import{Router} from 'express'

import  {dobro,somar, media, temperatura, tabuada, primaria, cinema, frequencia} from './services.js'

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


// cor primaria

server.get('/dia2/corprimaria/:cor', (req, resp) => {

    try {
        const cor = req.params.cor;
        const x = primaria(cor);
        resp.send({
            primaria:x 
        })
        
    } catch (error) {
        resp.status(404).send({
            error:err.message
        })
    }

})

server.post('/dia2/ingressocinema', (req,resp) => {
    try {

        const qtdinteiras = req.body.qtdinteiras;
        const valor = req.body.valor;
        const qtdmeias = req.body.qtdmeias;
        const diasemana = req.body.diasemana;
        const nacional = req.body.nacional;
        const x = cinema(qtdinteiras, qtdmeias, diasemana, nacional, valor);
        resp.send({
            total:x
        })
        
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

server.get('/dia2/freqcaracter/:texto/:caracter', (req,resp) => {
    try {
        const texto = req.params.texto;
        const caracter = req.params.caracter;
        const x = frequencia(texto,caracter);
        resp.send({
            freq:x
        })
    } catch (err) {
        resp.status(404).send({
            error:err.message
        })
    }
})

server.post('/dia2/maiornumero', (req, resp) => {
    const maior = req.body.maior;
    const x = 
})





export default server