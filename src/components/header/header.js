import React, { Component } from 'react';
import styled from 'styled-components';
import './header.css';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

export default class Header extends Component {
    
    render() {

    return (
        <HeaderBlock>
            <HeaderTitle>
                <a href="https://anapioficeandfire">
                Game of Thrones DB
                </a>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <a href="https://anapioficeandfire">Characters</a>
                </li>
                <li>
                    <a href="https://anapioficeandfire">Houses</a>
                </li>
                <li>
                    <a href="https://anapioficeandfire">Books</a>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
    }
};