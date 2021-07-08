const additionBtn = document.getElementById('add_task');
const tBody = document.getElementById('todo_list');
const tdCount = 4;
const delBtnValue = '削除';
let id = 0;

function createTableData(task) {
  const row = document.createElement('tr');
  // オブジェクトのプロパティ数分ループ
  for (const property in task) {
    const cell = document.createElement('td');
    // Object[property] でプロパティの値を取得する
    if (property === 'id' || property === 'content') {
      const cellText = document.createTextNode(task[property]);
      cell.appendChild(cellText);
    } else {
      const cellBtn = document.createElement('input');
      cellBtn.type = 'button';
      cellBtn.value = task[property];
      cell.appendChild(cellBtn);
    }
    row.appendChild(cell);
  }
  tBody.appendChild(row);
}

function addTask() {
  const task_input = document.getElementById('input_task');
  if (task_input.value !== '') {
    id++;
    const content = task_input.value;
    const status = '作業中';
    const del = delBtnValue;
    const task = { id, content, status, del };
    createTableData(task);
    task_input.value = '';
  }
}

additionBtn.addEventListener('click', () => {
  addTask();
});
