const dropdownElement = document.getElementById('nav-dropdown');
const dropdownList = document.getElementById('nav-dropdown-list');

function showDropdownItems() {
    if(dropdownList.classList.contains('display-none')) {
        dropdownList.classList.remove('display-none');
    } else {
        dropdownList.classList.add('display-none');
    }
}

dropdownElement.addEventListener('click', () => showDropdownItems());

const hamburgerButtonElement = document.getElementById('nav-hamburger-button');
const hamburgerList = document.getElementById('nav-hamburger');

function showHamburgerItems() {
    if(hamburgerList.classList.contains('display-none')) {
        hamburgerList.classList.remove('display-none');
    } else {
        hamburgerList.classList.add('display-none');
    }
}

hamburgerButtonElement.addEventListener('click', () => showHamburgerItems());