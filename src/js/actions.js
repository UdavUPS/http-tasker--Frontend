import { ticketCreate, Messages, showTicketDescription } from './components.js';
import { detAllTickets, refreshStatusTicket } from './xhr.js';
const messagesBox = document.querySelector('.messages-box');
const butAddTick = document.querySelector('.box__addBut');
const box= document.querySelector('.box');

const Win = new Messages();

window.addEventListener('load', ()=>{detAllTickets()});


ticketCreate(123, 'Проверка введенной задачи (генерируемая карточка)', '29.09.24 16:15', true, 'Тест описания карточки');
/* ticketCreate(123, 'Проверка введенной задачи (генерируемая карточка)', '29.09.24 16:15); */



butAddTick.addEventListener('click', () => {
    messagesBox.classList.remove('visually-hidden');
    messagesBox.append(Win.centralBlock('Добавить тикет'));
});

box.addEventListener('click', (e) => {
    /* console.log(e.target); */
    if (e.target.classList.contains('box__ticket__editor')) {
        messagesBox.classList.remove('visually-hidden');
        let box = e.target.parentElement;
        let i = box.querySelector('.box__ticket__id').innerText;
        messagesBox.append(Win.centralBlock('Изменить тикет', i));
    }
    if (e.target.classList.contains('box__ticket__delete')) {
        messagesBox.classList.remove('visually-hidden');
        let box = e.target.parentElement;
        messagesBox.append(Win.centralBlock(undefined ,box.querySelector('.box__ticket__id').innerText));
    }

    if (e.target.classList.contains('box__ticket__text')) {
        showTicketDescription(e.target);
    }

    if (e.target.classList.contains('box__ticket__checker')) {
        let checker = e.target.parentElement.querySelector('.box__ticket__checkbox').checked;
        let box = e.target.parentElement.parentElement;
        console.log(checker);
        console.log(box.querySelector('.box__ticket__id').innerText)
        refreshStatusTicket(box.querySelector('.box__ticket__id').innerText, checker);
        /* e.preventDefault(); */
    }
})

