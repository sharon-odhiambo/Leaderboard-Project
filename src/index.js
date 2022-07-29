// import _ from 'lodash';
import { fetchUser } from './modules/fetch';
import { displayScores, getUser } from './modules/ui';
import './style.css';

const refreshButton = document.querySelector('.button-refresh');
const submit = document.querySelector('.form1');
const userName = document.getElementById('user').value;
const userScore = document.getElementById('score').value;

 console.log(getUser())

submit.addEventListener('submit', (e) => {
  e.preventDefault;
  fetchUser(userName, userScore);
})

refreshButton.addEventListener('click', async() => {
  const getResults = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qt7inFzYl1SGwGP9B7it/scores');
  const hitAPI = await getResults.json();
  displayScores(hitAPI.result);
})
