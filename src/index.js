// import _ from 'lodash';
import './style.css';

const userResults = document.querySelector('.list-board tbody');
const refreshButton = document.querySelector('.button-refresh');
const submit = document.querySelector('.add');
const userName = document.querySelector('#user').value;
const userScore = document.querySelector('#score').value;



const fetchUser = async(player, playerResults) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KeLjl0LNfZakc5q5BLBC/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: `${player}`, score: playerResults }),
  });
  const results = await response.json();
   return (results.result)
};

const displayScores = async(scores) => {
  for(let i = 0; i < scores.length; i += 1) {
    userResults.innerHTML += `<tr><td>${scores[i].user} : ${scores[i].score}</td></tr>`;
  }
}
const getUser = async() => {
  const getResults = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/KeLjl0LNfZakc5q5BLBC/scores')
  const hitAPI = await getResults.json();
   return (hitAPI)
}
console.log(getUser());
const giveUser = getUser();
console.log(giveUser.result);
submit.addEventListener('click', (e) => {
  e.preventDefault;
  fetchUser(userName, userScore);
})

refreshButton.addEventListener('click', () => {
  displayScores(getUser());
})
