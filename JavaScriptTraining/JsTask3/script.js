'use strict';

const additionBtn = document.getElementById('add_task');
const tBody = document.getElementById('todo_list');
let todoId = 1;
let todos = [];

function clearChildElements(pElem) {
  while (pElem.firstChild) {
    pElem.removeChild(pElem.firstChild);
  }
}

// add delete button ToDo
function addTdDeleteBtn() {
  const td = document.createElement('td');
  const btn = document.createElement('input');
  btn.type = 'button';
  btn.todoI = 'delToDo';
  btn.value = '削除';
  td.appendChild(btn);
  return td;
}

// display ToDos
function displayTodos() {
  clearChildElements(tBody);
  todos.forEach((todo, index) => {
    const tr = document.createElement('tr');
    // set ToDo
    for (const property in todo) {
      const td = document.createElement('td');
      if (property === 'status') {
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.todoI = property;
        btn.value = todo[property];
        td.appendChild(btn);
      } else {
        const lbl = document.createElement('label');
        lbl.todoI = property;
        lbl.textContent = todo[property];
        td.appendChild(lbl);
      }
      tr.appendChild(td);
    }
    // setDelBtn
    tr.appendChild(addTdDeleteBtn());

    tBody.appendChild(tr);
  });
}

function addTask() {
  const task_input = document.getElementById('input_task');
  if (task_input.value !== '') {
    const id = todoId;
    const content = task_input.value;
    const status = '作業中';
    const todo = { todoId, content, status };
    todos.push(todo);
    displayTodos();
    task_input.value = '';
    todoId++;
  }
}

additionBtn.addEventListener('click', () => {
  addTask();
});
