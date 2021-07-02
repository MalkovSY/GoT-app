import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem, NotFound} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import hiden from './hideRandom.jpg';
import './app.css';

export default class App extends Component {

    gotService = new GotService();
    
    state = {
        showRandom: false,
        error: false,
        selectedHouse: 15
    }
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    
    hideAll = () => {
        this.setState((state) => {
            return {
                showRandom: !state.showRandom
            }
        });
    }
    
    render() {

        const { showRandom, error } = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const randomChar = showRandom ? <img className='hidenImg' src={hiden} alt='hideImg'></img> : <RandomChar interval={15000}/>;

        return (
            <Router>
                <div className='app'> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <button 
                                className="toggle-btn"
                                onClick={this.hideAll}>Show/hide random char</button>
                        </Col>
                    </Row>
                    <Switch>
                    <Route path='/' component={() => <h1 className='mainPage'>Welcome to GOT DB. You can select the menu item at the top right. 
                                                                                This SPA was created to practice with server. 
                                                                                        API used by anapioficeandfire.com </h1>} exact/>
                    <Route path='/characters' component={CharacterPage}/>
                    <Route path='/books' component={BooksPage} exact/>
                    <Route path='/books/:id' render={({match}) => {
                                const {id} = match.params;
                                if(id <= 12) {
                                    return <BooksItem bookId={id}/>
                                } else {
                                    return <Route component={NotFound}/>
                                }
                                }}/>
                    <Route path='/houses' component={HousesPage}/>
                    <Route path='*' component={NotFound} />
                    </Switch>
                </Container>
            </div>
            </Router>
        );
  }
};