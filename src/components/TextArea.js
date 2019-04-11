import React from 'react';
import '../textArea.css';


const TextArea = (props) =>
<form className='feedback' onSubmit={props.handleSubmit}>
    <textarea rows='10' cols='40' placeholder="leave your feedback..." ></textarea>
    <button type="submit">Send</button>
    </form>


export default TextArea;
