import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "⚽": "Football",
  "⚾": "Baseball",
  "🏀": "Volleyball",
  "🏈": "Rugby",
  "🎯": "Archery",
  "🎾": "Badminton",
  "⛳": "Golf",
  "🏏": "Cricket"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry we have dont listed this in our database";
    }
    console.log(meaning);
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Guess the Game</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
