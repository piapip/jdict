import React, { useState } from 'react';
import { Button, Fade, Card, CardImg, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';

const ShowRandomResult = (props) => {
    const [fadeIn, setFadeIn] = useState(false);

    const toggle = () => setFadeIn(!fadeIn);
    const dStyle = {
        display: 'inline-block'
    };

    return (
        <div style={dStyle}>
            <Button color="info" onClick={toggle}>{props.random.kanji}</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
                Cách đọc: {props.random.furigana}, Nghĩa: {props.random.meaning} <br />
                <Button color="danger" onClick={props.onDelete}>Delete</Button>
            </Fade>
        </div>


    );
}

export default ShowRandomResult;