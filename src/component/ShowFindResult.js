import React, { Component } from 'react';
import './../App.css';

import { Jumbotron, Col, Container} from 'reactstrap';

class ShowFindResult extends Component {
    render() {
        const jStyle = {
            margin: '10px',
            padding: '5px',
            background: '#ccffcc',
            height:'21vh',
          };
          const dStyle = {
            cursor: 'pointer'
          };
        return (
            <div >
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Jumbotron fluid  style={jStyle} className="deleteFindResult">
                        <Container fluid style={dStyle} onClick = {this.props.onDelete} className="deleteFindResult">
                            <h2 className="display-3 ">{this.props.result.kanji}</h2>
                            <p className="lead">
                            
                            Cách đọc: {this.props.result.furigana} <br />
                            Nghĩa: {this.props.result.meaning}
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </div>
        );
    }
}

export default ShowFindResult;