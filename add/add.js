const sidebarNode = document.getElementById('sidebar');
const introNode = document.getElementById('intro');
const menuNode = document.querySelector('.menu');
introNode.style.marginLeft = innerWidth / 50 + 275 + 'px';
let boolMenu = false;


function removeMenu() { // Скрытие sidebar
    boolMenu = !boolMenu;
    if (boolMenu) {
        sidebarNode.classList.add('remove__menu');
        menuNode.classList.add('menu__transform');
        introNode.style.marginLeft = innerWidth / 50 + 'px';
    } else {
        sidebarNode.classList.remove('remove__menu');
        menuNode.classList.remove('menu__transform');
        introNode.style.marginLeft = innerWidth / 50 + 275 + 'px';
    }
}

menuNode.addEventListener('click', () => { // Обработчик скрытие sidebar
    removeMenu();
});

const addingNode = document.querySelector('.adding');
const divNode = document.querySelector('.block__task');
const headerNode = document.querySelector('.header');
let boolDiv = false;

function newTask() {    // Появления нового блока для создания задачи
    boolDiv = !boolDiv;
    if (boolDiv) {
        divNode.classList.add('remove__block');
    } else {
        divNode.classList.remove('remove__block');
    }
}

addingNode.addEventListener('click', () => { // Обработчик появления нового блока для создания задачи
    newTask()
});







// // создание блока задач
// let plus = false;

// function newTask() {
    // let newTask = document.querySelector('.block__task');
    // let header = document.querySelector('.header');
    // let sidebar = document.querySelector('.sidebar');
    // let intro = document.querySelector('.intro');
    // const adding = document.querySelector('.adding');



//     if (plus) {
//         newTask.style.display = 'none';
//         adding.style.pointerEvents = 'auto';
//         header.style.filter = 'blur(0px)';
//         sidebar.style.filter = 'blur(0px)';
//         intro.style.filter = 'blur(0px)';
//         return plus = false;

//     } else {
//         newTask.style.display = 'block';
//         adding.style.pointerEvents = 'none';
//         header.style.filter = 'blur(20px)';
//         sidebar.style.filter = 'blur(20px)';
//         intro.style.filter = 'blur(20px)';
//         return plus = true;
//     }
// }


