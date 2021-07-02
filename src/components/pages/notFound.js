import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class NotFound extends Component {

    render () {
        return (
            <div>
                <h1 className='mainPage'>404 Page not found</h1>
                <Link className='mainPage' to="/">Go home</Link>
            </div>
        )
    }
}