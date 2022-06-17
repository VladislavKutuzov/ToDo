// меню бургер
let bool = true;
let sidebar = document.getElementById('sidebar');
let intro = document.getElementById('intro');
let menu = document.querySelector('.menu__btn');

intro.style.marginLeft =  innerWidth / 50 + 275 + 'px';

function onMenu() {
    if (bool) {
        sidebar.style.display = 'none';
        sidebar.style.width = '0px';
        intro.style.marginLeft = innerWidth / 50 + 'px';
        menu.classList.remove('menu__transform');
        return bool = false;
    } else {
        sidebar.style.display = 'block';
        sidebar.style.width = '275px';
        intro.style.marginLeft =  innerWidth / 50 + 275 + 'px';
        menu.classList.add('menu__transform');
        return bool = true;
    }
}

// создание блока задач
let plus = false;

function newTask() {
    let newTask = document.querySelector('.block__task');
    let header = document.querySelector('.header');
    let sidebar = document.querySelector('.sidebar');
    let intro = document.querySelector('.intro');
    const adding = document.querySelector('.adding');



    if (plus) {
        newTask.style.display = 'none';
        adding.style.pointerEvents = 'auto';
        header.style.filter = 'blur(0px)';
        sidebar.style.filter = 'blur(0px)';
        intro.style.filter = 'blur(0px)';
        return plus = false;

    } else {
        newTask.style.display = 'block';
        adding.style.pointerEvents = 'none';
        header.style.filter = 'blur(20px)';
        sidebar.style.filter = 'blur(20px)';
        intro.style.filter = 'blur(20px)';
        return plus = true;
    }
}


