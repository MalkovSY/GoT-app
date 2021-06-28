import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService';
import hiden from './hideRandom.jpg';
import './app.css';

export default class App extends Component {

    gotService = new GotService();
    
    state = {
        showRandom: false,
        selectedChar: 130
    }

    hideAll = () => {
        this.setState((state) => {
            return {
                showRandom: !state.showRandom
            }
        });
    }

    onCharSelected = (item) => {
        this.setState({
            selectedChar: item.gotService._extractCharId(item)
        });
        console.log(this.state.selectedChar)
    }
    
    render() {
        const { showRandom } = this.state;

        const randomChar = showRandom ? <img className='hidenImg' src={hiden} alt='hideImg'></img> : <RandomChar/>;

        return (
            <> 
                <Container>
                    <Header hideAll={this.hideAll}/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <button 
                            className="toggle-btn" 
                            onClick={this.hideAll}>Hide/show random char</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
  }
};