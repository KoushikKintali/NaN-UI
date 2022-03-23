const githubButtonElement = document.getElementById('btn-github');

if (githubButtonElement) {
    githubButtonElement.addEventListener('click', () => {
        location.href = "https://github.com/KoushikKintali/NaN-UI"
    });
}

const btnDarkMode = document.getElementById('btn-dark-mode');
const btnLightMode = document.getElementById('btn-light-mode');

const darkModeElement = document.getElementById('dark-mode');
const lightModeElement = document.getElementById('light-mode');

const footerElement = document.getElementById('footer');

const body = document.querySelector('body');
const nav = document.querySelector('nav');
const liElements = document.getElementsByClassName('side-nav-items');
const previewBlock = document.getElementsByClassName('preview-block');

function enableDisableDarkMode(mode) {
    let uiMode = localStorage.getItem('mode');
    if (mode) {
        localStorage.setItem('mode', mode);
        uiMode = mode;
    }

    if (uiMode === 'dark') {
        nav.classList.add('dark');
        body.className = "dark";
        darkModeElement.classList.add('display-none');
        lightModeElement.classList.remove('display-none');
        if (footerElement) {
            footerElement.classList.add('dark');
        }
    } else {
        nav.classList.remove('dark')
        body.className = "";
        darkModeElement.classList.remove('display-none');
        lightModeElement.classList.add('display-none');
        if (footerElement) {
            footerElement.classList.remove('dark');
        }
    }

    for (let i = 0; i < liElements.length; i++) {
        const element = liElements[i];
        if (uiMode === 'dark') {
            element.classList.add('dark-side-nav')
        } else {
            element.classList.remove('dark-side-nav')
        }
    }

    for (let i = 0; i < previewBlock.length; i++) {
        const element = previewBlock[i];
        if (uiMode === 'dark') {
            element.classList.add('dark-preview-block')
        } else {
            element.classList.remove('dark-preview-block')
        }
    }
}

if (btnDarkMode) {
    btnDarkMode.addEventListener('click', () => enableDisableDarkMode('dark'));
}

if (btnLightMode) {
    btnLightMode.addEventListener('click', () => enableDisableDarkMode('light'));
}

enableDisableDarkMode();