const snackbarButtonElement = document.getElementById('btn-snackbar-success');
const snackbarElement = document.getElementById('snackbar');
const snackbarDismissElement = document.getElementById('snackbar-dismiss');

const snackbarTopLeftButtonElement = document.getElementById('btn-snackbar-top-left');
const snackbarTopCenterButtonElement = document.getElementById('btn-snackbar-top-center');
const snackbarTopRightButtonElement = document.getElementById('btn-snackbar-top-right');
const snackbarBottomLeftButtonElement = document.getElementById('btn-snackbar-bottom-left');
const snackbarBottomCenterButtonElement = document.getElementById('btn-snackbar-bottom-center');
const snackbarBottomRightButtonElement = document.getElementById('btn-snackbar-bottom-right');

const snackbarTopLeftElement = document.getElementById('snackbar-top-left');
const snackbarTopCenterElement = document.getElementById('snackbar-top-center');
const snackbarTopRightElement = document.getElementById('snackbar-top-right');
const snackbarBottomLeftElement = document.getElementById('snackbar-bottom-left');
const snackbarBottomCenterElement = document.getElementById('snackbar-bottom-center');
const snackbarBottomRightElement = document.getElementById('snackbar-bottom-right');

function showSnackBarComponent() {
    if(snackbarElement.classList.contains('display-none')) {
        snackbarElement.classList.remove('display-none');
    } else {
        snackbarElement.classList.add('display-none');
    }
}

function showPositionedComponent(position) {
    if(position === 'bottom-right' && snackbarBottomRightElement.classList.contains('display-none')) {
        snackbarBottomRightElement.classList.remove('display-none');
        snackbarBottomLeftElement.classList.add('display-none');
        snackbarBottomCenterElement.classList.add('display-none');
        snackbarTopRightElement.classList.add('display-none');
        snackbarTopLeftElement.classList.add('display-none');
        snackbarTopCenterElement.classList.add('display-none');
    } else {
        snackbarBottomRightElement.classList.add('display-none');
    }

    if(position === 'bottom-left' && snackbarBottomLeftElement.classList.contains('display-none')) {
        snackbarBottomLeftElement.classList.remove('display-none');
        snackbarBottomCenterElement.classList.add('display-none');
        snackbarTopRightElement.classList.add('display-none');
        snackbarTopLeftElement.classList.add('display-none');
        snackbarTopCenterElement.classList.add('display-none');
        snackbarBottomRightElement.classList.add('display-none');
    } else {
        snackbarBottomLeftElement.classList.add('display-none');
    }

    if(position === 'bottom-center' && snackbarBottomCenterElement.classList.contains('display-none')) {
        snackbarBottomCenterElement.classList.remove('display-none');
        snackbarTopRightElement.classList.add('display-none');
        snackbarTopLeftElement.classList.add('display-none');
        snackbarTopCenterElement.classList.add('display-none');
        snackbarBottomLeftElement.classList.add('display-none');
        snackbarBottomRightElement.classList.add('display-none');
    } else {
        snackbarBottomCenterElement.classList.add('display-none');
    }

    if(position === 'top-right' && snackbarTopRightElement.classList.contains('display-none')) {
        snackbarTopRightElement.classList.remove('display-none');
        snackbarTopLeftElement.classList.add('display-none');
        snackbarTopCenterElement.classList.add('display-none');
        snackbarBottomLeftElement.classList.add('display-none');
        snackbarBottomCenterElement.classList.add('display-none');
        snackbarBottomRightElement.classList.add('display-none');
    } else {
        snackbarTopRightElement.classList.add('display-none');
    }

    if(position === 'top-left' && snackbarTopLeftElement.classList.contains('display-none')) {
        snackbarTopLeftElement.classList.remove('display-none');
        snackbarTopCenterElement.classList.add('display-none');
        snackbarTopRightElement.classList.add('display-none');
        snackbarBottomLeftElement.classList.add('display-none');
        snackbarBottomCenterElement.classList.add('display-none');
        snackbarBottomRightElement.classList.add('display-none');
    } else {
        snackbarTopLeftElement.classList.add('display-none');
    }

    if(position === 'top-center' && snackbarTopCenterElement.classList.contains('display-none')) {
        snackbarTopLeftElement.classList.add('display-none');
        snackbarTopCenterElement.classList.remove('display-none');
        snackbarTopRightElement.classList.add('display-none');
        snackbarBottomLeftElement.classList.add('display-none');
        snackbarBottomCenterElement.classList.add('display-none');
        snackbarBottomRightElement.classList.add('display-none');
    } else {
        snackbarTopCenterElement.classList.add('display-none');
    }
}

snackbarButtonElement.addEventListener('click', () => showSnackBarComponent());
snackbarDismissElement.addEventListener('click', () => showSnackBarComponent());
snackbarBottomRightButtonElement.addEventListener('click', () => showPositionedComponent('bottom-right'));
snackbarBottomCenterButtonElement.addEventListener('click', () => showPositionedComponent('bottom-center'));
snackbarBottomLeftButtonElement.addEventListener('click', () => showPositionedComponent('bottom-left'));
snackbarTopRightButtonElement.addEventListener('click', () => showPositionedComponent('top-right'));
snackbarTopCenterButtonElement.addEventListener('click', () => showPositionedComponent('top-center'));
snackbarTopLeftButtonElement.addEventListener('click', () => showPositionedComponent('top-left'));