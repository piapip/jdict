import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';

const ShowRandomResult = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);
    const dStyle = {
        display: 'inline-block',
        boxShadow: '0 0 5px 2px #ccc',
        margin: '10px',
        padding: '5px',
    };
    const fStyle = {
        
        fontWeight: 'bold',
        fontSize: 90,
        color: '#ffff99',
        width: 150,
        height: 150,
    };

    return (
        <div style={dStyle}>
            <Button color="info" onClick={toggle} style={fStyle}>{props.random.kanji}</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
                読み方: {props.random.furigana} | 意味: {props.random.meaning} <br />
                <Button color="danger" onClick={props.onDelete}>Delete</Button>
            </Fade>
        </div>


    );
}

export default ShowRandomResult;