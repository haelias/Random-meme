import './App.css';
import placeholder from './placeholder.png'
import React, {useEffect, useState} from "react";
import RandomRating from './randRating';


function App() {

  const [imgage, setImg] = useState(false)
  const [meme, setMeme] = useState(placeholder)

  const getMeme = async(e) => {

    e.preventDefault()
    const url = `https://meme-api.herokuapp.com/gimme`;
    
    try {
      const res = await fetch(url);
      const data  = await res.json();
      console.log(data)
      setImg(data)
      setMeme(imgage.url)
    }catch(err){
      console.log("shit")
      // Fuck off Andrè don't look through my shit
  }

  }

  return (
    <div className="App">
      {/* <h1>Dagens meme</h1> */}
      <button onClick = {getMeme}>Get meme pls thx</button>
      <RandomRating />
      <img src = {meme} alt = 'meme'></img>
    </div>
  );
}

export default App;


