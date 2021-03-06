import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
        console.log(this.state.selectedChar);
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
                <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.gotService.getAllCharacter}
                        renderItem={({name, gender}) => `${name} (${gender})`}/>
        );

        const itemDetails = (
                <ItemDetails itemId = {this.state.selectedChar}
                             getData={this.gotService.getCharacterById} >
                    <Field field='gender'  label='Gender' />
                    <Field field='born'  label='Born' />
                    <Field field='died'  label='Died' />
                    <Field field='culture'  label='Culture' />
                </ItemDetails>
        );

        return (
            <RowBlock 
                left={itemList}
                right={itemDetails}/>
        )
    }
}