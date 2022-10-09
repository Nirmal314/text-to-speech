import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function textToSpeeech(text) {
    let u = new window.SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    u.text = text;
    u.lang = "hi-IN";
    u.volume = 1;
    u.rate = 1;
    u.voice = voices[7];

    window.speechSynthesis.speak(u);
    console.log("spoke");
  }
  function fire() {
    textToSpeeech(text);
  }
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={fire}>speak</button>
    </>
  );
}

export default Home;
