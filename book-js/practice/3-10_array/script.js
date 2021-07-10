const todoList = [
  'go higashinagasaki',
  'JavaScript',
  'reserve salons',
  'JsTask',
];
const output = document.getElementById('todo_list');
todoList.forEach((todo) => {
  const li = document.createElement('li');
  li.textContent = todo;
  output.appendChild(li);
});
