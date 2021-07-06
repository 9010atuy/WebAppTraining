const listTitle = `
======================
現在持っているタスクの一覧
======================`;

const typeMessage =
  "「確認、追加、削除、終了」の4つのいずれかを入力してください";

const addMessage = "新しいタスクを追加しました";

const task1 = { category: "掃除", content: "机を片付ける" };
const task2 = { category: "買い物", content: "牛乳を買う" };
const task3 = { category: "運動", content: "散歩する" };

let taskList = [task1, task2, task3];
// console.log(taskList.get());
showTaskList(taskList);
const newTask = inputTask();
taskList = addTask(newTask, taskList);
showTaskList(taskList);
const type = prompt(typeMessage);

function showTaskList(taskList) {
  console.log(listTitle);
  taskList.forEach((task, index) => {
    console.log(`${index} : [内容]${task.content}、[ジャンル]${task.category}`);
  });
}

function inputTask() {
  let flag = true;
  let task;
  while (flag === true) {
    const content = prompt("タスクを入力してください");
    const category = prompt("ジャンルを入力してください");
    if (content && category) {
      task = { category: category, content: content };
      flag = false;
    }
  }
  return task;
}

function addTask(newTask, taskList) {
  if (newTask.category && newTask.content) {
    taskList.push(newTask);
    alert(addMessage);
    return taskList;
  } else {
    console.log("[warn]   ジャンルもしくはタスクが入力されていません。");
  }
}
