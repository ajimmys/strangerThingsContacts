import Axios  from 'axios';
import React, { useEffect, useState } from 'react';

function Home () {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/getContacts')
            .then((response) => {
                setData(response.data);
            })

    }, [])

    return(
        <div className="homeLayout">
            {data.map((val) => {
                return (
                    <div>
                        <h4>{val[0]} {val[1]}</h4>
                        <p className='phoneNumber'>Phone: {formatPhoneNumber(val[2])}</p>
                        <p>Address:  {val[3]} {val[4]}</p>
                        <p>Email: {val[5]} </p>
                        <p>Birthday: {formatDate(val[6])} </p>
                        <p>Is Upside-down: {checkIsUpsideDown(val[7])} </p>
                    </div>
                )
            })}
        </div>
    );
}

function formatPhoneNumber(phoneNumber){
    return phoneNumber.length === 10 ? 
    `(${phoneNumber[0]}${phoneNumber[1]}${phoneNumber[2]}) ${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}-${phoneNumber[6]}${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}` 
    : phoneNumber
}

function formatDate(date){
    let month = date[5] === '0' ? date[6] : `${date[5]}${date[6]}`
    let day = date[8] === '0' ? date[9] : `${date[8]}${date[9]}`
    let year = `${date[0]}${date[1]}${date[2]}${date[3]}`
    return `${month}/${day}/${year}`
}

function checkIsUpsideDown(upsideDown){
    return upsideDown === '1' ? 'Yes' : 'No'
}

export default Home;