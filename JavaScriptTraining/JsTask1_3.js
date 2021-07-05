const list_title = `
======================
現在持っているタスクの一覧
======================`;

const type_message =
  "「確認、追加、削除、終了」の4つのいずれかを入力してください";

let task_list = ["掃除", "買い物", "散歩"];

showTaskList(task_list);

let flag = true;
while (flag === true) {
  const new_task = prompt("タスクを入力してください");
  if (new_task) {
    task_list.push(new_task);
    flag = false;
  }
}
showTaskList(task_list);
const type = prompt(type_message);

function showTaskList(task_list) {
  console.log(list_title);
  for (let i = 0; i < task_list.length; i++) {
    console.log(`${i}：${task_list[i]}`);
  }
}
