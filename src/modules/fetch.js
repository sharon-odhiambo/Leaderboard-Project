/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UYuxCEKHoViyOLelfSd5/scores';
const fetchUser = async (user, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: `${user}`, score: +score }),
  });
  const hitAPI = await response.json();
  return hitAPI.result;
};

export { fetchUser };
/* eslint-enable import/prefer-default-export */