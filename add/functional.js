const todosNode = document.querySelector('.main__inner');
const inputNode = document.querySelector('.add-todo');
const btnNode = document.querySelector('.btn-add');
const todos = [];

function addTodo(text) {    // Создание задачи
    const todo = {
        text,
        done: false,
        id: String(Math.random()),
    };

    todos.push(todo);
}

function deleteTodo(id) {   // Удаление задачи
    todos.forEach(todo => {
        if (todo.id == id) {
            todo.done = true;
        }
    });
}

function render() { // Обновление свойств
    let html = '';
    console.log(todos);

    todos.forEach(todo => { // Отрисовка состояни данных
        if (todo.done) {
            return;
        }

        if (todo.text == '') {
            return;
        }

        html += `
            <li class="link">
            <button data-id='${todo.id}' class="checkbox pink-br"></button>
             ${todo.text}
            </li>
        `;
    })

    todosNode.innerHTML = html;
}

btnNode.addEventListener('click', () => {   // Обработчик создание задачи
    const text = inputNode.value;

    addTodo(text);

    render();
});

todosNode.addEventListener('click', (event) => {   // Обработчик удаления задачи
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render();

});

render();