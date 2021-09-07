'use strict';

const h2 = document.querySelector('h2');
const message = document.getElementById('message');
const btnContainer = document.getElementById('button-container');
const info = document.getElementById('info');
const category = document.getElementById('category');
const level = document.getElementById('level');
const quizApiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
let startBtn;
let quizList;
let quizIndex;
let correctCount = 0;
const displayWelcomPage = () => {
  clearChildElements(btnContainer);
  h2.textContent = 'ようこそ！';
  message.textContent = '以下のボタンをクリック';
  startBtn = document.createElement('button');
  startBtn.id = 'start-button';
  startBtn.textContent = '開始';
  startBtn.addEventListener('click', quizStart);
  btnContainer.appendChild(startBtn);
};

const loading = () => {
  h2.textContent = 'クイズ取得中';
  message.textContent = '少々お待ちください。';
  startBtn.remove();
};

const quizStart = () => {
  getQuiz();
  loading();
};

const getQuiz = () => {
  quizList = [];
  quizIndex = 0;
  fetch(quizApiUrl)
    .then(response => {
      return response.json();
    })
    .then(result => {
      convertJson2Array(result);
      return;
    })
    .then(() => {
      displayQuiz(quizIndex);
    });
};

const convertJson2Array = jsonObj => {
  jsonObj.results.forEach(result => {
    quizList.push(result);
  });
};

const displayQuiz = index => {
  // 問題index
  h2.textContent = `問題${index + 1}`;
  // ジャンル
  category.textContent = `[ジャンル] ${quizList[index].category}`;
  info.appendChild(category);
  // 難易度
  level.textContent = `[難易度] ${quizList[index].difficulty}`;
  info.appendChild(level);
  // 問題（メッセージ）
  message.textContent = quizList[index].question;
  // 回答（4択）
  createAnswerButtons(quizList[index]);
};

const createAnswerButtons = quiz => {
  clearChildElements(btnContainer);
  let answers = quiz.incorrect_answers;
  answers.push(quiz.correct_answer);
  // 回答をランダムに並び替え
  answers = shuffle(answers);
  answers.forEach(answer => {
    const answerBtn = document.createElement('button');
    answerBtn.textContent = answer;
    answerBtn.addEventListener('click', answerQuiz);
    btnContainer.appendChild(answerBtn);
  });
};

const clearChildElements = elem => {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
};

// 配列をランダムに並べ替え
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const answerQuiz = e => {
  const answer = e.target.innerText;
  const correct_answer = quizList[quizIndex].correct_answer;
  if (answer === correct_answer) {
    correctCount++;
  }
  quizIndex++;
  if (quizIndex < quizList.length) {
    displayQuiz(quizIndex);
  } else {
    displayResult();
  }
};

const displayResult = () => {
  clearChildElements(info);
  clearChildElements(btnContainer);
  h2.textContent = `あなたの正解数は${correctCount}です`;
  message.textContent = '再度チャレンジしたい場合は以下をクリック';
  const topBtn = document.createElement('button');
  topBtn.textContent = 'クリック';
  topBtn.addEventListener('click', displayWelcomPage);
  btnContainer.appendChild(topBtn);
};

displayWelcomPage();
