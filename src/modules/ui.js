/* eslint-disable import/prefer-default-export */
const userResults = document.querySelector('.list-board tbody');

const displayScores = async (scores) => {
  for (let i = 0; i < scores.length; i += 1) {
    scores.sort((a, b) => b.score - a.score);
    userResults.innerHTML += `<tr><td>${scores[i].user} : ${scores[i].score}</td></tr>`;
  }
};
export { displayScores };
/* eslint-enable import/prefer-default-export */