import { createTicket, delTicket, refreshAllTicket } from './xhr.js';

export function ticketCreate(i, text, time, status = false, description) {
    const box = document.querySelector('.boxF');

    const ticket = document.createElement('div');
    ticket.classList.add('box__ticket');

    const id= document.createElement('div');
    id.classList.add('box__ticket__id');
    id.innerText = i;

    const label = document.createElement('label');
    label.classList.add('checker');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('box__ticket__checkbox');
    checkbox.checked = status;

    const checker = document.createElement('div');
    checker.classList.add('box__ticket__checker');

    const textO = document.createElement('div');
    textO.classList.add('box__ticket__text');
    textO.innerText = text;

    const timeO = document.createElement('div');
    timeO.classList.add('box__ticket__time');
    timeO.innerText = time;

    const editor = document.createElement('div');
    editor.classList.add('box__ticket__editor');
    /* editor.innerHTML = '&#x270E'; */

    const del = document.createElement('div');
    del.classList.add('box__ticket__delete');
    /* del.innerHTML = 'X'; */

    const descr = document.createElement('div');
    descr.classList.add('box__ticket__description');
    descr.classList.add('visually-hidden');
    descr.innerText = description;

    label.appendChild(checkbox);
    label.appendChild(checker);
    ticket.appendChild(id);
    ticket.appendChild(label);
    ticket.appendChild(textO);
    ticket.appendChild(timeO);
    ticket.appendChild(editor);
    ticket.appendChild(del);
    ticket.appendChild(descr);

    box.appendChild(ticket);
}

export function showTicketDescription(elem) {
    const box = elem.parentElement;
    const des = box.querySelector('.box__ticket__description');
    if (des.classList.contains('visually-hidden')) {
        des.classList.remove('visually-hidden');
    } else {
        des.classList.add('visually-hidden');
    }
}


export class Messages {
    constructor() {
        this.title,
        this.height = 2.1 +'vw'
    }

    centralBlock(name, id) {

        if (name) {
            this.title = name;
        } else {
            this.title = 'Удалить тикет';
        };


        let common = document.createElement('div');
        common.classList.add('show-message');

        let titleBlock = document.createElement('div');
        titleBlock.classList.add('show-message__title');
        titleBlock.innerText = this.title;
        common.append(titleBlock);


        let titlePreview = document.createElement('div');
        titlePreview.classList.add('show-message__title-preview');


        if (this.title !== 'Удалить тикет') {
        
            titlePreview.innerText = 'Краткое описание';

            var preview = document.createElement('input');
            preview.classList.add('show-message__preview');
            /* preview.value = 'asdsadsd'; */
            
            let titleDescription = document.createElement('div');
            titleDescription.classList.add('show-message__title-description');
            titleDescription.innerText = 'Подробное описание';
            
            var description = document.createElement('textarea');
            description.classList.add('show-message__description');

            common.append(titlePreview);
            common.append(preview);
            common.append(titleDescription);
            common.append(description);

        } else {
            titlePreview.innerText = 'Вы уверены, что хотите удалить тикет? Это действие необратимо';
            common.append(titlePreview);
            common.style.height = 8 +'vw';
        }

        

        let butRemov = document.createElement('button');
        butRemov.classList.add('show-message__But-remov');
        butRemov.innerText = 'Отмена';
        butRemov.addEventListener('click', () => {
            common.remove();
            Messages.remov();
        });

        let ButOk = document.createElement('button');
        ButOk.classList.add('show-message__But-ok');
        ButOk.innerText = 'Ok';
        ButOk.addEventListener('click', () => {
            /* console.log('ок'); */
            if (this.title == 'Добавить тикет') {
                /* createTicket(name, description, status) */
                createTicket(preview.value, description.value, false);
                /* console.log('Добавить тикет'); */
            };
            if (this.title == 'Изменить тикет') {
                refreshAllTicket(id, preview.value, description.value);
                /* console.log('Изменить тикет'); */
            };
            if (this.title == 'Удалить тикет') {
                delTicket(id);
                /* console.log('Удалить тикет'); */
            }
        });
        


        common.append(butRemov);
        common.append(ButOk);

        return common;
    };



    static remov() {
        document.querySelector('.messages-box').classList.add('visually-hidden');
    }

    



/*      static qwe() {
        let a = 'Прюв';
        return a;
    }

    hi() {
        let a = Messages.qwe();
        console.log(a);
    } */
}