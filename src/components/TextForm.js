import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked ::" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    // console.log("LowerCase was Clicked ::" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText = "Start your Text . . ."; // error aiga ...

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
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
      <div
        className="conatiner my-4 mx-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2> Your Text Summary </h2>
        <p>
          <b>{text.split(" ").length - 1}</b> Words and <b>{text.length} </b>{" "}
          Characters
        </p>

        <p>{0.01 * text.split(" ").length} Minutes read.</p>
        <h2> Preview </h2>
        <p> {text.length > 0 ? text : "Enter Something in the Text - Box"} </p>
      </div>
    </>
  );
}
