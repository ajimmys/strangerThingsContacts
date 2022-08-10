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
            isEvil: false,
            fade: false,
        }

    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target

        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name] : value})
    }

    handleClick = (contact) => {
        this.setState({contact: contact})
        this.setState({isEvil: checkIsUpsideDown(contact[7])});
        this.setState({fade : true})
    }

    handleAnimation = () => {
        this.setState({fade : false})
    }

    render(){
    
        return(
            <div className={this.state.isEvil ? "homeContainer evil" : "homeContainer"}>
                <NameListComponent handleClick={this.handleClick} isEvil={this.state.isEvil}/>
                <ContactDisplayComponent contact={this.state.contact} isEvil={this.state.isEvil} fade={this.state.fade} handleAnimation={this.handleAnimation}/>
            </div>
        )}
}

export default Home;