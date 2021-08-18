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
    button.addEventListener("click", handleClick) 
})

/*Quando o botão delete for clicado, ele abre a modal*/
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))

})

function handleClick(event, check = true) {

    event.preventDefault() //serve para parar de alterar a URL quando se clica para abrir o modal

    const text =  check ? "Tem certeza que você deseja marcar como lida" : "Tem certeza que você deseja excluir"
    
    //estrutura de ternários
    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir esta pergunta"
    //exemplo com template string
    modalDescription.innerHTML = `${text} esta pergunta?`
    modalButton.innerHTML = check ? "Sim, marcar com lida" : "Sim, excluir"

    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open();
}



