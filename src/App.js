import React, { useState } from "react";
// import '../styles/App.css';
import Preview from './Preview';
const App = () => {

  const [contentInput, setContentInput] = useState("hello newton");
  const [fontSizeInput, setFontSizeInput] = useState(10);
  const [paddingInput, setPaddingInput] = useState(5);

  return (
    <div id="main">
      <div>
        <input
          type="text"
          id="contentInput"
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        />
        <br />
        <input
          type="number"
          id="fontSizeInput"
          value={fontSizeInput}
          onChange={(e) => setFontSizeInput(e.target.value)}
        />
        <br />
        <input
          type="number"
          id="paddingInput"
          value={paddingInput}
          onChange={(e) => setPaddingInput(e.target.value)}
        />
      </div>
      <Preview content={contentInput} fontSize={`${fontSizeInput}px`} padding={`${paddingInput}px`} />
    </div>
  )
}

// function Preview(props) {
//   console.log("test "+ props.content);
//   return (
//     <div style={{ fontSize: `${props.fontSize}`, padding: `${props.padding}`}}>
//       {props.content}
//     </div>
//   )
// }


export default App;