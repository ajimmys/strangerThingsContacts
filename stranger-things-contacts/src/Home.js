import React, { Component } from 'react';
import NameListComponent from './Components/NameListComponent';
import ContactDisplayComponent from './Components/ContactDisplayComponent'
import { checkIsUpsideDown } from './Helpers/formatting';

class Home extends Component{
    constructor(){
        super()
        this.state = {
            data: [],
            contact: '',
            isEvil: false 
        }

    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name] : value})
    }

    handleClick = (contact) => {
        this.setState({contact: contact})
        this.setState({isEvil: checkIsUpsideDown(contact[7])})
    }

    render(){
        var renderConatiner = this.state.isEvil ? (
            <div className="homeContainer evil">
                <NameListComponent handleClick={this.handleClick} isEvil={this.state.isEvil}/>
                <ContactDisplayComponent contact={this.state.contact} isEvil={this.state.isEvil}/>
            </div>
    
        ) : (
            <div className="homeContainer">
                <NameListComponent handleClick={this.handleClick} isEvil={this.state.isEvil}/>
                <ContactDisplayComponent contact={this.state.contact} isEvil={this.state.isEvil}/>
            </div>
        )
    
        return(
            <div>
                <div className="overLoad"></div>
                {renderConatiner}     
            </div>
        )}
}

export default Home;