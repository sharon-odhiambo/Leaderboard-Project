const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qKuQrD8AL1Per5aSN5Z6/scores';
const fetchUser = async (user, scores) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify({ user: `${user}`, score: +scores }),
    });
    const hitAPI = await response.json();
  return hitAPI.result;
  };

  export { fetchUser }