
const formEl = document.querySelector('form');
const inputEl = document.querySelector('#todo');
const thingsToDo = document.querySelector('ul')
const todos = [];

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const todo = inputEl.value;
    todos.push(todo);
    console.log(todo);
    renderthingsToDo();
    inputEl.value = '';
})

function renderthingsToDo() {
    const template = todos.map(item => `<li>${item}</li>`).join('')
    thingsToDo.innerHTML = template;
}

const completeButton = document.querySelector('#complete');
completeButton.addEventListener('click', function() {
    todos.pop();
  renderthingsToDo();
})

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', function() {
    todos.pop();
  renderthingsToDo();
})

