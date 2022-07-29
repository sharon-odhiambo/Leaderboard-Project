// import _ from 'lodash';
import { fetchUser } from './modules/fetch';
import { displayScores } from './modules/ui';
import './style.css';

const refreshButton = document.querySelector('.button-refresh');
const submit = document.querySelector('.form1');
const userName = document.getElementById('user1').value;
const userScore = document.getElementById('score1').value;


submit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(userName, userScore)
  // fetchUser(userName, userScore);
})

refreshButton.addEventListener('click', async() => {
  window.location.reload();
  const getResults = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qKuQrD8AL1Per5aSN5Z6/scores');
  const hitAPI = await getResults.json();
  displayScores(hitAPI.result);
})

window.addEventListener('DOMContentLoaded', async() => {
  const getResults = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qKuQrD8AL1Per5aSN5Z6/scores');
  const hitAPI = await getResults.json();
  displayScores(hitAPI.result);
});