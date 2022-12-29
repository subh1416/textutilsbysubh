import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase() 
        setText(newText)
        props.showAlert('Converted to Uppercase','success');
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied!','success');

    }
    const [text, setText] = useState('Enter text here')
  return (
    <>
    <div className='container'  style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea id="myBox" className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey' , color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode === 'primary'?'dark':'primary'}`}onClick={handleUpClick}>Convert Into Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length } words and {text.length} characters</p>
    </div>
    </>
  )
}
