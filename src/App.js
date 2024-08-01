// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;











// import React, { useState } from 'react';
// import { Editor, EditorState, RichUtils } from 'draft-js';
// import 'draft-js/dist/Draft.css';
// import './App.css';

// function App() {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const [fontSize, setFontSize] = useState(14);
//   const [fontFamily, setFontFamily] = useState('Arial');
//   const [fontColor, setFontColor] = useState('#000000');
//   const [textTransform, setTextTransform] = useState('none');
//   const [alignment, setAlignment] = useState('left');

//   const handleChange = (state) => setEditorState(state);

//   const toggleInlineStyle = (style) => {
//     setEditorState(RichUtils.toggleInlineStyle(editorState, style));
//   };

//   const handleFontSizeChange = (e) => setFontSize(e.target.value);

//   const handleFontFamilyChange = (e) => setFontFamily(e.target.value);

//   const handleFontColorChange = (e) => setFontColor(e.target.value);

//   const handleTextTransformChange = (e) => setTextTransform(e.target.value);

//   const handleAlignmentChange = (alignment) => {
//     const newState = RichUtils.toggleBlockType(editorState, alignment);
//     setEditorState(newState);
//     setAlignment(alignment);
//   };

//   const clearPage = () => setEditorState(EditorState.createEmpty());

//   const getEditorStyle = () => ({
//     fontSize: `${fontSize}px`,
//     fontFamily: fontFamily,
//     color: fontColor,
//     textTransform: textTransform,
//     textAlign: alignment,
//   });

//   const getEditorContent = () => {
//     const contentState = editorState.getCurrentContent();
//     const plainText = contentState.getPlainText();
//     return {
//       wordCount: plainText.split(/\s+/).filter(Boolean).length,
//       letterCount: plainText.replace(/\s+/g, '').length,
//     };
//   };

//   const { wordCount, letterCount } = getEditorContent();

//   return (
//     <div className="App">
//       <div className="toolbar">
//         <button onClick={() => toggleInlineStyle('BOLD')}>Bold</button>
//         <button onClick={() => toggleInlineStyle('ITALIC')}>Italic</button>
//         <button onClick={() => toggleInlineStyle('UNDERLINE')}>Underline</button>
//         <button onClick={() => handleAlignmentChange('left')}>Align Left</button>
//         <button onClick={() => handleAlignmentChange('center')}>Align Center</button>
//         <button onClick={() => handleAlignmentChange('right')}>Align Right</button>
//         <input
//           type="number"
//           value={fontSize}
//           onChange={handleFontSizeChange}
//           min="10"
//           max="100"
//         />
//         <select onChange={handleFontFamilyChange} value={fontFamily}>
//           <option value="Arial">Arial</option>
//           <option value="Courier New">Courier New</option>
//           <option value="Georgia">Georgia</option>
//         </select>
//         <input
//           type="color"
//           value={fontColor}
//           onChange={handleFontColorChange}
//         />
//         <select onChange={handleTextTransformChange} value={textTransform}>
//           <option value="none">None</option>
//           <option value="uppercase">Uppercase</option>
//           <option value="lowercase">Lowercase</option>
//           <option value="capitalize">Capitalize</option>
//         </select>
//         <button onClick={clearPage}>Clear Page</button>
//       </div>
//       <div className="editor" style={getEditorStyle()}>
//         <Editor
//           editorState={editorState}
//           onChange={handleChange}
//           placeholder="Start typing..."
//         />
//       </div>
//       <div className="stats">
//         <p>Word Count: {wordCount}</p>
//         <p>Letter Count: {letterCount}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './App.css';

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [fontSize, setFontSize] = useState(14);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontColor, setFontColor] = useState('#000000');
  const [textTransform, setTextTransform] = useState('none');

  const handleChange = (state) => setEditorState(state);

  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleFontSizeChange = (e) => setFontSize(e.target.value);

  const handleFontFamilyChange = (e) => setFontFamily(e.target.value);

  const handleFontColorChange = (e) => setFontColor(e.target.value);

  const handleTextTransformChange = (e) => setTextTransform(e.target.value);

  const handleAlignmentChange = (alignment) => {
    const newState = RichUtils.toggleBlockType(editorState, alignment);
    setEditorState(newState);
  };

  const clearPage = () => setEditorState(EditorState.createEmpty());

  const getEditorStyle = () => ({
    fontSize: `${fontSize}px`,
    fontFamily: fontFamily,
    color: fontColor,
    textTransform: textTransform,
  });

  const getEditorContent = () => {
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();
    return {
      wordCount: plainText.split(/\s+/).filter(Boolean).length,
      letterCount: plainText.replace(/\s+/g, '').length,
    };
  };

  const { wordCount, letterCount } = getEditorContent();

  return (
    <div className="App">
      <div className="toolbar">
        <button onClick={() => toggleInlineStyle('BOLD')}>Bold</button>
        <button onClick={() => toggleInlineStyle('ITALIC')}>Italic</button>
        <button onClick={() => toggleInlineStyle('UNDERLINE')}>Underline</button>
        <button onClick={() => handleAlignmentChange('left-align')}>Align Left</button>
        <button onClick={() => handleAlignmentChange('center-align')}>Align Center</button>
        <button onClick={() => handleAlignmentChange('right-align')}>Align Right</button>
        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          min="10"
          max="100"
        />
        <select onChange={handleFontFamilyChange} value={fontFamily}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
        </select>
        <input
          type="color"
          value={fontColor}
          onChange={handleFontColorChange}
        />
        <select onChange={handleTextTransformChange} value={textTransform}>
          <option value="none">None</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
        <button onClick={clearPage}>Clear Page</button>
      </div>
      <div className="editor" style={getEditorStyle()}>
        <Editor
          editorState={editorState}
          onChange={handleChange}
          blockStyleFn={getBlockStyle}
          placeholder="Start typing..."
        />
      </div>
      <div className="stats">
        <p>Word Count: {wordCount}</p>
        <p>Letter Count: {letterCount}</p>
      </div>
    </div>
  );
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'left-align':
      return 'leftAlign';
    case 'center-align':
      return 'centerAlign';
    case 'right-align':
      return 'rightAlign';
    default:
      return null;
  }
}

export default App;
