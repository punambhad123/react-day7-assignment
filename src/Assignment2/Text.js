import React, {useState} from "react";

function TextAreawithLimit(){
    const [text, setText] = useState('');

    function handleInputChange(event) {
        const { value } = event.target;
        if (value.length <=100) {
            setText(value);

        }
        else{alert("Only 100 characters")}
    }
    return (
        <>
        
        <div>
            <textarea
            value={text}
            placeholder='Enter Text Here...'
            onChange={handleInputChange}
            maxLength={100}
            />
            <p>{100 - text.length}</p>
        </div>
        </>
    );
}
export default TextAreawithLimit;