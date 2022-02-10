import Vue from 'vue';
import App from './App.vue';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCu1kttfutf8glijUSOyqID12pPAn42bmE',
  authDomain: 'vue-task4-39757.firebaseapp.com',
  projectId: 'vue-task4-39757',
  storageBucket: 'vue-task4-39757.appspot.com',
  messagingSenderId: '624021319285',
  appId: '1:624021319285:web:3863f2a5a9782cfa5b123c',
  measurementId: 'G-KTKSV8SMPR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
