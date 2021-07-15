const form = document.getElementById('form');
const output = document.getElementById('output');
form.onsubmit = () => {
  output.textContent = `search "${form.word.value}" ...`;
  // イベントにひもづくファンクションの'''return false'''はHTMLの基本動作（ここではsubmit）をキャンセルしている
  return false;
};
