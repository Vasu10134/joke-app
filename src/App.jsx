import { useState } from "react";
import "./App.css";

function App() {
  const jokes = [
    { id: 1, q: "Why don't scientists trust atoms?", a: "Because they make up everything!" },
    { id: 2, q: "Why did the bicycle fall over?", a: "Because it was two-tired!" },
    { id: 3, q: "What do you call fake spaghetti?", a: "An impasta!" },
    { id: 4, q: "Why did the scarecrow win an award?", a: "Because he was outstanding in his field!" },
    { id: 5, q: "Why don't programmers like nature?", a: "Too many bugs." },
    { id: 6, q: "Why do JavaScript developers wear glasses?", a: "Because they don’t C#." },
    { id: 7, q: "Why was the math book sad?", a: "It had too many problems." },
    { id: 8, q: "What do you call cheese that isn't yours?", a: "Nacho cheese." },
    { id: 9, q: "Why was the computer cold?", a: "It forgot to close its Windows." },
    { id: 10, q: "Why did the coffee file a police report?", a: "It got mugged." },
    { id: 11, q: "What do you call a bear with no teeth?", a: "A gummy bear." },
    { id: 12, q: "Why don't eggs tell jokes?", a: "They’d crack each other up." },
    { id: 13, q: "Why can't you trust stairs?", a: "They're always up to something." },
    { id: 14, q: "Why was the tomato red?", a: "Because it saw the salad dressing!" },
    { id: 15, q: "How does a penguin build its house?", a: "Igloos it together." }
  ];

  const [currentJoke, setCurrentJoke] = useState(jokes[0]);

  const showRandomJoke = () => {
    const random = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[random]);
  };

  return (
    <div className="container">
      <h1 className="title">😂 Random Joke Generator</h1>

      <div className="card">
        <h2 className="question">{currentJoke.q}</h2>
        <h3 className="answer">{currentJoke.a}</h3>
      </div>

      <button className="btn" onClick={showRandomJoke}>
        Next Joke ➜
      </button>
    </div>
  );
}

export default App;
