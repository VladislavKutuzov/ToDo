function onCheck(e) {
    if (isChecked(e)) {
        e.classList.remove("checked");
    } else {
        e.classList.add("checked");
    }
}

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