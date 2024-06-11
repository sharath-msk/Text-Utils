import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = "";
        setText(newText);
    }
    const handleCopy = ()=>{
        console.log("Text is copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"white":"grey"}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3">
    <h1>
        Your text summary
    </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</>
  )
}
