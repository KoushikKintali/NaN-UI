const modalElement = document.getElementById('modal');
const openModalElement = document.getElementById('open-modal');
const closeModalElement = document.getElementById('close-modal');
const cancelModalButtonElement = document.getElementById('cancel-modal-button');

const modalLgElement = document.getElementById('modal-lg');
const openModalLgElement = document.getElementById('open-modal-lg');
const closeModalLgElement = document.getElementById('close-modal-lg');
const cancelModalLgButtonElement = document.getElementById('cancel-modal-button-lg');


function openCloseModal() {
    if(modalElement.classList.contains('display-none')) {
        modalElement.classList.remove('display-none');
    } else {
        modalElement.classList.add('display-none');
    }
}

function openCloseModalLg() {
    if(modalLgElement.classList.contains('display-none')) {
        modalLgElement.classList.remove('display-none');
    } else {
        modalLgElement.classList.add('display-none');
    }
}

openModalElement.addEventListener('click', () => openCloseModal());
closeModalElement.addEventListener('click', () => openCloseModal());
cancelModalButtonElement.addEventListener('click', () => openCloseModal());

openModalLgElement.addEventListener('click', () => openCloseModalLg());
closeModalLgElement.addEventListener('click', () => openCloseModalLg());
cancelModalLgButtonElement.addEventListener('click', () => openCloseModalLg());