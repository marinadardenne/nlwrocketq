//import { query } from 'express'
import Modal from './modal.js'

const modal = Modal()

//No caso do marcar como lido, precisamos abrir a modal com o texto correto. Com isso, estamos mapeando o que será alterado
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// adicionar o event listener para cada botão
checkButtons.forEach(button => {
    // adicionar a escuta
    button.addEventListener("click", event => {

        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que você deseja marcar como lida?"

        modal.open()
    })
})

/*Quando o botão delete for clicado, ele abre a modal*/
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event =>{

        modalTitle.innerHTML = "Excluir pergunta"
        modalDescription.innerHTML = "Tem certeza que você deseja excluir essa pergunta?"

        modal.open()
    })
})



