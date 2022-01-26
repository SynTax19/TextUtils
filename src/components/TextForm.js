import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked ::" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("LowerCase was Clicked ::" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText = "Start your Text . . ."; // error aiga ...

  return (
    <>
      <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert UP
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert LOW
        </button>
      </div>
      <div className="conatiner my-4 mx-3">
        <h2> Your Text Summary </h2>
        <p>
          <b>{text.split(" ").length - 1}</b> Words and <b>{text.length} </b>{" "}
          Characters
        </p>

        <p>{0.01 * text.split(" ").length} Minutes read.</p>
        <h2> Preview </h2>
        <p> {text} </p>
      </div>
    </>
  );
}
