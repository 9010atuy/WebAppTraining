const listTitle = `
======================
現在持っているタスクの一覧
======================`;

const typeMessage =
  "「確認、追加、削除、終了」の4つのいずれかを入力してください";

let taskList = ["掃除", "買い物", "散歩"];

showTaskList(taskList);

let flag = true;
while (flag === true) {
  const newTask = prompt("タスクを入力してください");
  if (newTask) {
    taskList.push(newTask);
    flag = false;
  }
}
showTaskList(taskList);
const type = prompt(typeMessage);

function showTaskList(taskList) {
  console.log(listTitle);
  taskList.forEach((task, index) => {
    console.log(`${index} : ${task}`);
  });
}
