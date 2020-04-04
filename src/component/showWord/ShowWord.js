import React, { Component } from 'react';
import Word from "./Word";
import './ShowWord.css'

class ShowWord extends Component {

  render() {
    const {dictionary} = this.props;
    return (
      <div style={styles.container} className="grid">
        {
          dictionary.map((item, index) => {
            return (
              <Word word={item} key={index}
              editWord = {this.props.editWord}
              deleteWord = {this.props.deleteWord}/>
            )
          })
        }


      </div>
    );
  }
}

export default ShowWord;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 20,
  },
};