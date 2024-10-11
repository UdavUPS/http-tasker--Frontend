import { ticketCreate, Messages } from './components.js';
const messagesBox = document.querySelector('.messages-box');
const butAddTick = document.querySelector('.box__addBut');
const box= document.querySelector('.box');

const Win = new Messages();
const xhr = new XMLHttpRequest();


/* ticketCreate('Проверка введенной задачи (генерируемая карточка)', '29.09.24 16:15'); */
ticketCreate('Проверка введенной задачи (генерируемая карточка)', '29.09.24 16:15');



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
        /* console.log("ok"); */
        xhr.open('GET', 'http://localhost:7070');
        xhr.setRequestHeader('Content-Type', 'application/json'); 
        /* let metod = {method: 'allTickets'}; */
        let metod = "?method=allTickets";
        console.log(JSON.stringify(metod));
        
        xhr.send(JSON.stringify(metod));

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    console.log(data);
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }
})

