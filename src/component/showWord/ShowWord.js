import React, { Component } from 'react';
import Word from "./Word";
import './ShowWord.css'

class ShowWord extends Component {

  render() {
    const {dictionary} = this.props;
    return (
      <div style={styles.container} >
        {/* Hien thi tu o day */}
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
    /*justifyContent: 'space-evenly',*/
    marginLeft: '4%',
    marginRight: '2%',
    marginTop: 20,
  },
};