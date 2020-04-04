import React, { Component } from 'react';
import ToggleButton from './ToggleButton';
import Word from "./Word";
import './ShowWord.css'

class ShowWord extends Component {

  render() {
    const {dictionary} = this.props;
    return (
      <div style={styles.container} className="grid">
        {/* Hien thi tu o day */}
        {
          dictionary.map((item, index) => (
            <Word word={item} key={index}/>
          ))
        }


        {/* */}
        {/*<ToggleButton />*/}
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