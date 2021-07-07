const listTitle = `
======================
現在持っているタスクの一覧
======================`;

const typeMessage =
  '「確認、追加、削除、終了」の4つのいずれかを入力してください';

const additionMessage = '新しいタスクを追加しました';

let taskList = [
  { category: '掃除', content: '机を片付ける' },
  { category: '買い物', content: '牛乳を買う' },
  { category: '運動', content: '散歩する' },
];
showTaskList(taskList);
const newTask = inputTask();
taskList = addTask(newTask, taskList);
showTaskList(taskList);
const type = prompt(typeMessage);

// 現在のタスクリストを表示する
function showTaskList(taskList) {
  console.log(listTitle);
  taskList.forEach((task, index) => {
    console.log(`${index} : [内容]${task.content}、[ジャンル]${task.category}`);
  });
}

// タスクを作成する
function inputTask() {
  let flag = true;
  let task;
  while (flag === true) {
    const content = prompt('タスクを入力してください');
    const category = prompt('ジャンルを入力してください');
    if (content && category) {
      task = { category, content };
      flag = false;
    }
  }
  return task;
}

// タスクを追加する
function addTask(newTask, taskList) {
  if (newTask.category && newTask.content) {
    taskList.push(newTask);
    alert(addMessage);
    return taskList;
  } else {
    console.log('[warn]   ジャンルもしくはタスクが入力されていません。');
  }
}
