import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter the text");
  //   setText("Nilesh");

  const handleUpClick = () => {
    // console.log("Clicked1");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleCopy = () => {
    // console.log("Clicked1");
    let newText = text.split(/[ ] + /)
    setText(newText.join(" "));
  };
  const handleLoClick = () => {
    // console.log("Clicked1");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    // console.log("Clicked1");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Clicked2");
    setText(event.target.value);
  };

  let words,characters=0
  if (text==="") {
    words=0
  }
  else if (text[text.length-1]===" ") {
    words=text.split(" ").length-1
  }
  else
  words = text.split(" ").length

  for (let index = 0; index < text.length; index++) {
    if(text[index]!== " ")
     characters ++
    
  }

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="TextBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            id="TextBox"
            onChange={handleOnChange}
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Clear ExtraSpaces</button>
        <div className="container my-3">
          <h1>Text Summary</h1>
          <p>{characters} characters and {words} words</p>
          <h3>Text Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
