import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FindButton from './component/FindButton'
import ShowWord from './component/showWord/ShowWord'
import AddButton from './component/AddButton'
import EditButton from './component/EditButton'
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
        kanji: '犬',
        furigana: 'inu',
        meaning: 'dog'
      }
    ],
    idGenerator: 5,
    showFurigana: true,
    showMeaning: true,
    displayWordID: 1
  }
  addWord = (newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let maxID = dictionary[dictionary.length-1].id
    dictionary[dictionary.length] = {
      id : maxID + 1,
      kanji : newKanji,
      furigana : newFurigana,
      meaning : newMeaning
    }
    this.setState({dictionary})
    console.log(dictionary)
  }
  edit = (newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let index = dictionary.findIndex((element) => {
      return element.id = this.state.displayWordID
    })
    dictionary[index] = {
      id: this.state.displayWordID,
      kanji: newKanji,
      furigana: newFurigana,
      meaning: newMeaning
    }
    this.setState({ dictionary })
  }

  delete = () => {
    let dictionary = this.state.dictionary
    dictionary = dictionary.filter((element) => {
      return element.id !== this.state.displayWordID
    })
    this.setState({ dictionary: dictionary, displayWordID: dictionary[0].id})
  }

  render() {
    var displayWord = this.state.dictionary.find(((element) => {
      return element.id === this.state.displayWordID
    }))

    return (
      <div className="App">
        <FindButton /> {/* Nguyen */}
        <AddButton 
          addWord = {this.addWord}
        /> {/* Hung */}
        <EditButton 
          displayWord = {displayWord} 
          editWord = {this.edit}
          deleteWord = {this.delete}/> {/* Tho */}
        <ShowWord 
          displayWord = {displayWord}
          showFurigana = {this.state.showFurigana}
          showMeaning = {this.state.showMeaning}/> {/* Hand + Tu */}
        <ShowRandomButton /> {/* Nguyen */}
      </div>
    );
  }
}

export default App;