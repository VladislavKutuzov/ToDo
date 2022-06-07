// 
function onCheckParents(e) {
    const checkbox = e.getElementsByClassName("checkbox")[0];
    if (isChecked(checkbox)) {
        checkbox.classList.remove("checked");
    } else {
        checkbox.classList.add("checked");
    }
}

function isChecked(element) {
    var rx = new RegExp('(?:^| )' + "checked" + '(?: |$)');
    return rx.test(element.className);
}

let plus = true;

function newTask() {
    let newTask = document.querySelector('.block__task');
    let header = document.querySelector('.header');
    let sidebar = document.querySelector('.sidebar');
    let intro = document.querySelector('.intro');

    if (plus) {
        newTask.style.display = 'none';
        header.style.filter = 'blur(0px)';
        sidebar.style.filter = 'blur(0px)';
        intro.style.filter = 'blur(0px)';
        return plus = false;

    } else {
        newTask.style.display = 'block';
        header.style.filter = 'blur(20px)';
        sidebar.style.filter = 'blur(20px)';
        intro.style.filter = 'blur(20px)';
        return plus = true;
    }
}


let bool = true;
let sidebar = document.getElementById('sidebar');
let intro = document.getElementById('intro');
intro.style.marginLeft =  innerWidth / 50 + 275 + 'px';

function onMenu() {
    if (bool) {
        sidebar.style.display = 'none';
        sidebar.style.width = '0px';
        intro.style.marginLeft = innerWidth / 50 + 'px';
        return bool = false;
    } else {
        sidebar.style.display = 'block';
        sidebar.style.width = '275px';
        intro.style.marginLeft =  innerWidth / 50 + 275 + 'px';
        return bool = true;
    }
}



