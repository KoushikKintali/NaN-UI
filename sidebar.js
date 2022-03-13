const getStartedExpandMoreElement = document.getElementById('get-started-expand-more');
const getStartedExpandLessElement = document.getElementById('get-started-expand-less');
const getStartedSideNavElements = document.getElementById('get-started-nav-items');

const componentsExpandMoreElement = document.getElementById('components-expand-more');
const componentsExpandLessElement = document.getElementById('components-expand-less');
const componentsSideNavElements = document.getElementById('components-nav-items');

function expandMore(type) {
    if (type === 'get-started' && getStartedExpandMoreElement.classList.contains('display-block')) {
        getStartedExpandMoreElement.classList.remove('display-block');
        getStartedExpandMoreElement.classList.add('display-none');
        getStartedExpandLessElement.classList.add('display-block');
        getStartedExpandLessElement.classList.remove('display-none');
        getStartedSideNavElements.classList.add('display-block');
    }

    if (type === 'components' && componentsExpandMoreElement.classList.contains('display-block')) {
        componentsExpandMoreElement.classList.remove('display-block');
        componentsExpandMoreElement.classList.add('display-none');
        componentsExpandLessElement.classList.add('display-block');
        componentsExpandLessElement.classList.remove('display-none');
        componentsSideNavElements.classList.add('display-block');
    }
}

function expandLess(type) {
    if (type === 'get-started' && getStartedExpandLessElement.classList.contains('display-block')) {
        getStartedExpandLessElement.classList.remove('display-block');
        getStartedExpandLessElement.classList.add('display-none');
        getStartedExpandMoreElement.classList.add('display-block');
        getStartedExpandMoreElement.classList.remove('display-none');
        getStartedSideNavElements.classList.remove('display-block');
    }

    if (type === 'components' && componentsExpandLessElement.classList.contains('display-block')) {
        componentsExpandLessElement.classList.remove('display-block');
        componentsExpandLessElement.classList.add('display-none');
        componentsExpandMoreElement.classList.add('display-block');
        componentsExpandMoreElement.classList.remove('display-none');
        componentsSideNavElements.classList.remove('display-block');
    }
}

getStartedExpandMoreElement.addEventListener('click', () => expandMore('get-started'));
getStartedExpandLessElement.addEventListener('click', () => expandLess('get-started'));

componentsExpandMoreElement.addEventListener('click', () => expandMore('components'));
componentsExpandLessElement.addEventListener('click', () => expandLess('components'));