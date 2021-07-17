'use strict';

const additionBtn = document.getElementById('add_task');
const tBody = document.getElementById('todo_list');
// 配列は基本const
const todos = [];

const clearChildElements = (pElem) => {
  while (pElem.firstChild) {
    pElem.removeChild(pElem.firstChild);
  }
};

const addTdToDoId = (todoId) => {
  const td = document.createElement('td');
  const lbl = document.createElement('label');
  lbl.classList.add('id');
  lbl.textContent = todoId;
  td.appendChild(lbl);
  return td;
};

// add delete button ToDo
const addTdDeleteBtn = (todoId) => {
  const td = document.createElement('td');
  const btn = document.createElement('input');
  btn.type = 'button';
  btn.classList.add('del');
  btn.value = '削除';
  btn.addEventListener('click', () => {
    delTask(todoId);
  });
  td.appendChild(btn);
  return td;
};

// display ToDos
const displayTodos = () => {
  clearChildElements(tBody);
  let todoId = 0;
  todos.forEach((todo, index) => {
    const tr = document.createElement('tr');
    // set Id
    tr.appendChild(addTdToDoId(todoId));
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
    tr.appendChild(addTdDeleteBtn(todoId));

    todoId++;

    tBody.appendChild(tr);
  });
};

const addTask = () => {
  const task_input = document.getElementById('input_task');
  if (task_input.value !== '') {
    const todo = {
      content: task_input.value,
      status: '作業中',
    };
    todos.push(todo);
    displayTodos();
    task_input.value = '';
  }
};

const delTask = (todoId) => {
  clearChildElements(tBody);
  todos.splice(todoId, 1);
  displayTodos();
};

additionBtn.addEventListener('click', () => {
  addTask();
});
