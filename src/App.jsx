import { useState } from "react";

export default function App() {
  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const showStory = xItem && yItem && zItem;
  const [name, setName] = useState("");
  const [ukus, setUkus] = useState("us");
  const temperature = ukus === "uk" ? "34 centigrade" : "94 fahrenheit";
  const weight = ukus === "uk" ? "21 stone" : "300 pounds";

  const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItems = ["the soup kitchen", "Disneyland", "the White House"];
  const zItems = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

  function handleClick() {
    setXItem(randomValueFromArray(xItems));
    setYItem(randomValueFromArray(yItems));
    setZItem(randomValueFromArray(zItems));

    const inputName = document.getElementById("customName").value;
    setName(inputName === "" ? "Bob" : inputName);

    const selectedCountry = document.querySelector("input[name='countries']:checked").value;
    selectedCountry === "uk" ? setUkus("uk") : setUkus("us");
  }


  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          placeholder=""
          id="customName"
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" id="us" value="us" name="countries" defaultChecked />
        <label htmlFor="uk">UK</label>
        <input type="radio" id="uk" value="uk" name="countries" />
      </div>
      <div>
        <button onClick={handleClick}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was {temperature} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs {weight},
          and it was a hot day.
        </p>
      )}
    </>
  );
}