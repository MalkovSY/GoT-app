import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';

class BooksPage extends Component {
    gotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId) //метод history у Route, этот метод из app сюда вошел благодаря withRouter
            }}
            getData={this.gotService.getAllBook}
            renderItem={({name}) => name}/>
        )
    }
}
export default withRouter(BooksPage);