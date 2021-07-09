var hour = new Date().getHours();
if (hour >= 19 && hour < 21) {
  window.alert('30% Off');
} else if (hour === 9 || hour === 15) {
  window.alert('plus one!');
} else {
  window.alert('Would you like some lunch?');
}
