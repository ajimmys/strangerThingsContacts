import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { formatPhoneNumber } from '../Helpers/formatting';

function NameListComponent ({handleClick, isEvil}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/getContacts')
            .then((response) => {
                setData(response.data);
            })

    }, [])

    const displayComponent = isEvil ? (        
        <div className="contactList evil">
            {data.map((val) => {
                return (
                    <div className='singleContact' onClick={() => handleClick(val)}>
                        <div>{val[0]} {val[1]}</div>
                        <div className='phoneNumber'>{formatPhoneNumber(val[2])}</div>
                    </div>
                )
            })}
        </div>
        ) : (
        <div className="contactList">
            {data.map((val) => {
                return (
                    <div className='singleContact' onClick={() => handleClick(val)}>
                        <div>{val[0]} {val[1]}</div>
                        <div className='phoneNumber'>{formatPhoneNumber(val[2])}</div>
                    </div>
                )
            })}
        </div>
    )

    return(
        <div>
            {displayComponent}        
        </div>
    );
}

export default NameListComponent;