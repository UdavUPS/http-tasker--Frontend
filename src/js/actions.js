import { ticketCreate, Messages, showTicketDescription } from './components.js';
import { detAllTickets } from './xhr.js';
const messagesBox = document.querySelector('.messages-box');
const butAddTick = document.querySelector('.box__addBut');
const box= document.querySelector('.box');

const Win = new Messages();

window.addEventListener('load', ()=>{detAllTickets()});


ticketCreate('Проверка введенной задачи (генерируемая карточка)', '29.09.24 16:15', true, 'Тест описания карточки');
/* ticketCreate('Проверка введенной задачи (генерируемая карточка)', '29.09.24 16:15); */



butAddTick.addEventListener('click', () => {
    messagesBox.classList.remove('visually-hidden');
    messagesBox.append(Win.centralBlock('Добавить тикет'));
});

box.addEventListener('click', (e) => {
    /* console.log(e.target); */
    if (e.target.classList.contains('box__ticket__editor')) {
        messagesBox.classList.remove('visually-hidden');
        messagesBox.append(Win.centralBlock('Изменить тикет'));
    }
    if (e.target.classList.contains('box__ticket__delete')) {
        messagesBox.classList.remove('visually-hidden');
        messagesBox.append(Win.centralBlock());
    }

    if (e.target.classList.contains('box__ticket__text')) {
        showTicketDescription(e.target);
    }
})

