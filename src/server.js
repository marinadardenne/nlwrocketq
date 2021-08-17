const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs') // está falando que quem está responsavel pela view engine é o ejs

server.use(express.static("public")) //faz que não seja necessário mudar os caminhas das coisas

server.set('views', path.join(__dirname, 'views')) // o path pega o caminho da pasta onde está o projeto, o join junta o caminho do meu projeto com o dir name. O dir name pega o nome da pasta (no caso src)

server.use(route) //express, usa o arquivo route

server.listen(3000, ()=> console.log("RODANDO")) //Isso é uma função chamada de arrow function. É um metodo resumido de fazer funções no javascript.

