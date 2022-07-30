// import _ from 'lodash';
import { fetchUser } from './modules/fetch.js';
import { displayScores } from './modules/ui.js';
import './style.css';

const refreshButton = document.querySelector('.button-refresh');;
const submit = document.querySelector('.form1');
const { user, score } = submit;

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchUser(user.value, score.value);
  submit.reset();
});

refreshButton.addEventListener('click', async () => {
  window.location.reload();
  const getResults = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UYuxCEKHoViyOLelfSd5/scores');
  const hitAPI = await getResults.json();
  displayScores(hitAPI.result);
});

window.addEventListener('DOMContentLoaded', async () => {
  const getResults = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UYuxCEKHoViyOLelfSd5/scores');
  const hitAPI = await getResults.json();
  displayScores(hitAPI.result);
});