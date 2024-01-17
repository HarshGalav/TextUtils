import React ,{useState} from 'react'
export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To UpperCase","success");

  } 
  const handleloClick = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText =text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To LowerCase","success");
  } 
  const clearkarde = ()=>{
    //console.log("Uppercase was clicked"+text);
    let newText ="";
    setText(newText)
  } 
  const handleOnChange = (event)=>{
   // console.log("onchange was clicked");
    setText(event.target.value)
  } 
 
  const [text,setText]=useState('Enter text here');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      
  
<h1>{props.heading}</h1>
<div className="mb-3" >
<textarea className="form-control" value={text} onChange={handleOnChange} style={{background : (props.mode === 'dark' ? '#011f4a' : 'white') ,color: (props.mode === 'dark' ? 'white' : 'black') }} id="myBox" rows="8" ></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to Uppercase </button>
<button className='btn btn-danger mx-2' onClick={handleloClick} >Convert to Lowercase </button>
<button className='btn btn-success mx-2' onClick={clearkarde} >Clear Space</button>


    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
}

 