
const userResults = document.querySelector('.list-board tbody');

const displayScores = async(scores) => {
    for(let i = 0; i < scores.length; i += 1) {
      scores.sort((a, b) => b.score - a.score);
      userResults.innerHTML += `<tr><td>${scores[i].user} : ${scores[i].score}</td></tr>`;
    }
  }
  const getUser = async() => {
    const getResults = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qt7inFzYl1SGwGP9B7it/scores');
    const hitAPI = await getResults.json();
      return hitAPI
   }

   export { displayScores, getUser } 