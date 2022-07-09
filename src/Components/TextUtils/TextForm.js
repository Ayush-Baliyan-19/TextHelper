import React from 'react'
import './TextForm.css'
const TextForm = (props) => {
    const [text, setText] = React.useState("");
    const [Find,setFind] =React.useState((""));
    const [Replace,setReplace] =React.useState((""));
    const changeText = (event) => {
        console.log(event.target.name);
        let namee = event.target.name;
        setText(() => {
            let newText = text;
            console.log(newText)
            if (namee === "uppercase") {
                newText = newText.toUpperCase();
            }
            else if (namee === "lowercase") {
                newText = newText.toLowerCase();
            }
            else if (namee === "clearText") {
                newText = "";
            }
            console.log(newText);
            return newText;
        })
    }
    const InterChange= () =>{
        var tempfind=Find;
        var tempReplace=Replace;
            setFind(tempfind)
            setReplace(tempReplace);
    }
    const replacetext = () =>{
        setText(()=>{
            let newText = text;
            while(newText)
            {
                newText=newText.replace(Find,Replace);
            }
            return newText;
        })
    }
    const findAndReplace = () => {
        document.getElementById("changeform").style.display="block";
    }
    const onchangehandle = (e) => {
        setText(e.target.value);
    }
    const changefind = (e) => {
        setFind(e.target.value);
    }
    const changeReplace = (e) => {
        setReplace(e.target.value);
    }
    return (
        <>
            <div>
                <h3>{props.Heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control my-3" value={text} id="MyTextArea" rows="11" onChange={onchangehandle}></textarea>
                </div>
                <button className="btn btn-primary mx-2" name='uppercase' onClick={changeText}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" name='lowercase' onClick={changeText}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" name='clearText' onClick={changeText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={findAndReplace}>Find And Replace</button>
                <div className='my-3' id='changeform' style={{display:"none"}}>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Word You Want To Change</label>
                    <input type="text" className="form-control" value={Find} id="wordtobechanged" onChange={changefind}/>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Word in Which You Want To Change</label>
                    <input type="text" className="form-control" value={Replace} id="wordtobechanged" onChange={changeReplace}/>
                    <button className="btn btn-primary mx-2 my-3" onClick={replacetext}>Replace</button>
                    <button className="btn btn-primary mx-2 my-3" onClick={InterChange}>Interchange</button>
                </div>
            </div>
            <div className='my-3'>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} Words and {text.split("").length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm