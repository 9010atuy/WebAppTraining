const question = "日本の首都は？";
const correct = "正解です！";
const uncorrect = "不正解です！";
const correctAnswer = "東京";

let flag = true;

while (flag) {
  const input = prompt(question);
  if (input == correctAnswer) {
    alert(correct);
    flag = false;
  } else {
    alert(uncorrect);
  }
}
