const RandomRating= () => {
    let rateMate = Math.floor(Math.random() * 10);
    console.log("randomRating:" + rateMate)
  
    return(<h2>Dagens MEME ........ Rating: {rateMate} / 10</h2>)
  }

  export default RandomRating