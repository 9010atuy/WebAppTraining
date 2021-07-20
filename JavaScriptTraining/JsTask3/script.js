'use strict';

const additionBtn = document.getElementById('add_task');
const tBody = document.getElementById('todo_list');
const statusOption = document.getElementsByName('status');
// 配列は基本const
const todos = [];
let checkedStatus = 'すべて';

const clearChildElements = pElem => {
  while (pElem.firstChild) {
    pElem.removeChild(pElem.firstChild);
  }
};

const addTdToDoId = index => {
  const td = document.createElement('td');
  const lbl = document.createElement('label');
  lbl.classList.add('id');
  lbl.textContent = index;
  td.appendChild(lbl);
  return td;
};

// add delete button ToDo
const addTdDeleteBtn = index => {
  const td = document.createElement('td');
  const btn = document.createElement('input');
  btn.type = 'button';
  btn.classList.add('del');
  btn.value = '削除';
  btn.addEventListener('click', () => {
    delTask(index);
  });
  td.appendChild(btn);
  return td;
};

// display ToDos
const displayTodos = () => {
  clearChildElements(tBody);
  todos.forEach((todo, index) => {
    const status = todo.status;
    if (checkedStatus === 'doing') {
      if (status !== '作業中') {
        return true;
      }
    } else if (checkedStatus === 'done') {
      if (status !== '完了') {
        return true;
      }
    }
    const tr = document.createElement('tr');
    // set Id
    tr.appendChild(addTdToDoId(index));
    // set ToDo
    for (const property in todo) {
      const td = document.createElement('td');
      if (property === 'status') {
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.classList.add(property);
        btn.value = todo[property];
        btn.addEventListener('click', () => {
          toggleStatus(index);
        });
        td.appendChild(btn);
      } else {
        const lbl = document.createElement('label');
        lbl.classList.add(property);
        lbl.textContent = todo[property];
        td.appendChild(lbl);
      }
      tr.appendChild(td);
    }
    // setDelBtn
    tr.appendChild(addTdDeleteBtn(index));

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

const delTask = index => {
  clearChildElements(tBody);
  todos.splice(index, 1);
  displayTodos();
};

const toggleStatus = index => {
  clearChildElements(tBody);
  const status = todos[index].status;
  if (status === '作業中') {
    todos[index].status = '完了';
  } else if (status === '完了') {
    todos[index].status = '作業中';
  }
  displayTodos();
};

additionBtn.addEventListener('click', () => {
  addTask();
});

const getRadioValue = name => {
  let result = '';
  const radioElems = document.getElementsByName(name);
  radioElems.forEach(elem => {
    if (elem.checked) {
      result = elem.id;
      return false;
    }
  });
  return result;
};

statusOption.forEach(e => {
  e.addEventListener('click', () => {
    checkedStatus = getRadioValue('status');
    clearChildElements(tBody);
    displayTodos();
  });
});
