import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FindButton from './component/FindButton'
import ShowWord from './component/showWord/ShowWord'
import AddButton from './component/AddButton'
import ShowRandomButton from './component/ShowRandomButton'

class App extends Component {
  
  state = {
    dictionary: [
      {
        id: 1,
        kanji: '犬',
        furigana: 'inu',
        meaning: 'dog'
      },
      {
        id: 2,
        kanji: '猫',
        furigana: 'neko',
        meaning: 'cat'
      },
      {
        id: 3,
        kanji: '鳥',
        furigana: 'tori',
        meaning: 'bird'
      },
      {
        id: 4,
        kanji: '山',
        furigana: 'yama',
        meaning: 'mountain'
      },
      {
        id: 5,
        kanji: '原',
        furigana: 'gen',
        meaning: 'source'
      }
    ]
  }

  addWord = (newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let newID = this.state.dictionary[this.state.dictionary.length-1].id + 1
    dictionary[dictionary.length] = {
      id : newID,
      kanji : newKanji,
      furigana : newFurigana,
      meaning : newMeaning
    }
    
    this.setState({ dictionary })
  }

  edit = (id, newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let index = dictionary.findIndex((element) => {
      return element.id === id
    })
    dictionary[index] = {
      id: id,
      kanji: newKanji,
      furigana: newFurigana,
      meaning: newMeaning
    }
    this.setState({ dictionary })
  }

  delete = (id) => {
    let dictionary = this.state.dictionary
    dictionary = dictionary.filter((element) => {
      return element.id !== id
    })
    this.setState({ dictionary: dictionary, displayWordID: dictionary[0].id})
  }

  render() {
    console.log(this.state.dictionary)
    return (
      <div className="App">
        <FindButton /> 
        <AddButton 
          addWord = {this.addWord}
        /> 
        <ShowWord 
          dictionary = {this.state.dictionary}
          editWord = {this.edit}
          deleteWord = {this.delete}
        />
        <ShowRandomButton />
      </div>
    );
  }
}

export default App;