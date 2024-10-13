import { ticketCreate } from './components.js';
const xhr = new XMLHttpRequest();

function dataChanger (data) {
    let mas = Array.from(String(data));
    /* console.log(mas); */
    return String(mas[2]) + String(mas[3]);
}

function add0 (num) {
    if (num < 10) {
        return String(0) + String(num);
    } else {
        return num;
    }
}


function responseHandler() {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                return data
            } catch (e) {
                console.error(e);
            }
        }
}



export function detAllTickets () {
    xhr.open('GET', 'http://localhost:7070/?method=allTickets');
    /* xhr.setRequestHeader('Content-Type', 'application/json'); */
    xhr.send();
    let a;
    xhr.addEventListener('load', () => {
        a = responseHandler();
        console.log(a);
        a.forEach(e => {
            let d = new Date(e.created);
            let m = add0(d.getUTCDate()) +"."+ add0((d.getUTCMonth()+1)) +"."+ dataChanger(d.getUTCFullYear()) + ' ' + add0(d.getUTCHours()) + ":" + add0(d.getUTCMinutes());
            ticketCreate(e.name, m, e.status, e.description);
        });
    });
}




