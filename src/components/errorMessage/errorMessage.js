import React from 'react';
import './errorMessage.css';
import errorImg from './errorJof.jpg'

const ErrorMessage = () => {
    return (                                    //src={process.env.PUBLIC_URL + '/img/errorJof.jpg'}
        <> 
            <img className='errorMessageBlock' src={errorImg} alt='err'></img>
            <span className='errorMessageBlock errorMessageText'>Кажется что-то пошло не так...</span>
        </>
    )
}

export default ErrorMessage;