let enemy = 100;
let attack;
window.alert('battle start');

while (enemy > 0) {
  attack = Math.floor(Math.random() * 30);
  console.log(attack);
  enemy = enemy - attack;
}
