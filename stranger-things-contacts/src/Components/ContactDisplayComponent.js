import React from "react";
import {formatPhoneNumber, formatDate} from "../Helpers/formatting"
import {Link} from "react-router-dom"

function ContactDisplayComponent (props) {
        var display = props.contact === '' ? 
        <div className="focusContact">
            <p className="contactName">Select a Contact</p>
        </div> : 
        props.isEvil ? (
            <div className="focusContact evil">
                    <p className="contactName">{props.contact[0]} {props.contact[1]}</p>
                    <p className="phoneNumber"> {formatPhoneNumber(props.contact[2])} </p>
                    <p className="contactInfo"> {props.contact[3]} </p> 
                    <p className="contactInfo">{props.contact[4]}</p>
                    <p className="contactInfo"> {props.contact[5]} </p>
                    <p className="contactInfo"> {formatDate(props.contact[6])} </p>
            </div>
        ) 
        : (
            <div className="focusContact">
                <p className="contactName">{props.contact[0]} {props.contact[1]}</p>
                <p className="phoneNumber"> {formatPhoneNumber(props.contact[2])} </p>
                <p className="contactInfo"> {props.contact[3]} </p> 
                <p className="contactInfo">{props.contact[4]}</p>
                <p className="contactInfo"> {props.contact[5]} </p>
                <p className="contactInfo"> {formatDate(props.contact[6])} </p>
            </div>
        )

        return (
            <div className={props.fade ? (props.isEvil ? 'fadeEvil' : 'fade') : ''} onAnimationEnd={props.handleAnimation}>
                {display}
                <nav>
                    <Link to="/addContact" className="button">+ New Contact</Link>
                </nav>
            </div>
        );
}

export default ContactDisplayComponent;

