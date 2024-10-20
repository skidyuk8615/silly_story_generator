import { useState } from "react";

export default function App() {
  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [showStory, setShowStory] = useState(false);
  const [name, setName] = useState("Bob");
  const [displayName, setDisplayName] = useState("Bob");
  const [ukus, setUkus] = useState("us");
  const [temperature, setTemperature] = useState("");
  const [weight, setWeight] = useState("");

  const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItems = ["the soup kitchen", "Disneyland", "the White House"];
  const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

  function handleClick() {
    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));
    setShowStory(true);
    setDisplayName(name);
    if (ukus === "uk") {
      setTemperature("34 centigrade");
      setWeight("21 stone");
    } else {
      setTemperature("94 fahrenheit");
      setWeight("300 pounds");
    }
  }


  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} onChange={(e) => setUkus(e.target.value)} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} onChange={(e) => setUkus(e.target.value)} />
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temperature} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {displayName} saw the whole thing, but was not surprised — {xItem} weighs {weight},
          and it was a hot day.
        </p>
      )}
    </>
  );
}