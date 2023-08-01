import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



import './form.css'
const App = () => {
  const [target, setTarget] = useState('');
  const [tooltipText, setTooltipText] = useState('Default');
  const [textSize, setTextSize] = useState(14);
  const [padding, setPadding] = useState(5);
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [cornerRadius, setCornerRadius] = useState(0);
  const [tooltipWidth, setTooltipWidth] = useState(150);
  const [arrowWidth, setArrowWidth] = useState(10);
  const [arrowHeight, setArrowHeight] = useState(10);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log('Dispatching action:', key, value);
    if (key === 'target') {
      setTarget(value);
    } 
    else if (key === 'tooltipText') {
      setTooltipText(value);
    }
    else if (key === 'textSize') {
      setTextSize(value);
    }
    else if (key === 'padding') {
      setPadding(value);
    }
    else if (key === 'textColor') {
      setTextColor(value);
    }
    else if (key === 'backgroundColor') {
      setBackgroundColor(value);
    }
    else if (key === 'cornerRadius') {
      setCornerRadius(value);
    }
    else if (key === 'tooltipWidth') {
      setTooltipWidth(value);
    }
    else if (key === 'arrowWidth') {
      setArrowWidth(value);
    }
    else if (key === 'arrowHeight') {
      setArrowHeight(value);
    }
    
    dispatch({ type: 'SET_VALUE', payload: { key: key, value: value} });
  };


  return (

    <div className="app-container">
      <h1>Tooltip Settings</h1>
      <div className="form-group">
        <label>Target Element:</label>
        <select value={target} onChange={(e) => setTarget(e.target.value)}>

          <option value="">Select</option>
          <option value="button1">button1</option>
          <option value="button2">button2</option>
          <option value="button3">button3</option>
          <option value="button4">button4</option>
          <option value="button5">button5</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="form-group">
        <label>Tooltip Text:</label>
        <input
          type="text"
          name="tooltipText"
          value={tooltipText}
          onChange={handleInputChange}
          placeholder='Enter text here'
        />
      </div>
      <div className="form-group">
        <label>Text Size:</label>
        <input
          type="number"
          value={textSize}
          onChange={(e) => setTextSize(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Padding:</label>
        <input
          type="number"
          value={padding}
          onChange={(e) => setPadding(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Text Color:</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Background Color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Corner Radius:</label>
        <input
          type="number"
          value={cornerRadius}
          onChange={(e) => setCornerRadius(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Tooltip Width:</label>
        <input
          type="number"
          value={tooltipWidth}
          onChange={(e) => setTooltipWidth(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Arrow Width:</label>
        <input
          type="number"
          value={arrowWidth}
          onChange={(e) => setArrowWidth(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Arrow Height:</label>
        <input
          type="number"
          value={arrowHeight}
          onChange={(e) => setArrowHeight(parseInt(e.target.value))}
        />
      </div>
         </div>

  );
};

export default App;
