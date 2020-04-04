import React, { useState } from 'react';
import { Button, Modal} from 'reactstrap';
import ListWord from "./ListWord.js"

const ShowWord = (props) => {
	const {
		dictionary
	} = props;
	const [modal, setModal] = useState(false);
  	const toggle = () => setModal(!modal);
  	var listWord = dictionary.map((todo, key) => (
        <ListWord
            id={key}
            kanji={todo.kanji}
            furigana={todo.furigana}
            meaning={todo.meaning}        
        />
    ))
    return (
		<div>
			<Button color="primary" onClick={toggle}>ShowListWord</Button>
			<Modal isOpen={modal} toggle={toggle} className="ok">
			{listWord}
      		</Modal> 
		</div>
    );
}

export default ShowWord;