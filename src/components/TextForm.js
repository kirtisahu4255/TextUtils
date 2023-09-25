import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }
    const handleLoClick=()=>{
      console.log("lowercase was clicked"+text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lowercase!","success");
  }
  const handleReveseClick = () => {
    console.log("reverse was clicked" + text);
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text reversed!", "success");
  }
  
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
const[text,setText]=useState('Enter text here');
  return (
  <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleReveseClick}>reverse the text</button>

    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and{text.length} character</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somethimg in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
