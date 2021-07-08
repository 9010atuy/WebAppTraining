const number = Math.floor(Math.random() * 6);
let flag = true;
while (flag) {
  const answer = parseInt(window.prompt('try input number (1~6)'));
  if (number === answer) {
    message = 'correct!';
    flag = false;
  } else if (number > answer) {
    message = 'up!';
  } else if (number < answer) {
    message = 'down!';
  }
  alert(message);
}
