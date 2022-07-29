const fetchUser = async() => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qt7inFzYl1SGwGP9B7it/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify({ user: `${user}`, score: scores }),
    });
    const scoreBoard = await response.json();
     return (scoreBoard.result)
  };

  export { fetchUser }