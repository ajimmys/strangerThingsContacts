import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

// reference for next video if I need it -- https://www.youtube.com/watch?v=_S2GKnFpdtE
// https://www.google.com/search?client=safari&rls=en&q=get+docker+network+ip&ie=UTF-8&oe=UTF-8

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')
  const [isWork, setIsWork] = useState('')

  const [data, setData] = useState([])

  useEffect (() => {
    Axios.get('http://localhost:8080/getContacts')
    .then((response) => {
      setData(response.data)
    })
  }, [])

  const submitNewContact = () => {
    console.log(isWork)
    Axios.post(`http://localhost:8080/addUser?firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}&address1=${address1}&address2=${address2}&email=${email}&birthday=${birthday}&isWork=${isWork}`)
      .then(() => {
      alert("Successfully Added");
    })
  }

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className='inputForm'>
        <input type="text" name="firstName" placeholder="First Name" onChange={(event) => {setFirstName(event.target.value)}}/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={(event) => {setLastName(event.target.value)}}/>
        <input type="text" name="phoneNumber" placeholder="(000)123-4567" onChange={(event) => {setPhoneNumber(event.target.value)}}/>
        <input type="text" name="address1" placeholder="Address 1" onChange={(event) => {setAddress1(event.target.value)}}/>
        <input type="text" name="address2" placeholder="Address 2" onChange={(event) => {setAddress2(event.target.value)}}/>
        <input type="text" name="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
        <input type="date" name="birthday" onClick={(event) => {setBirthday(event.target.value)}}/>
        <label>
          Work Contact?
          <input type="checkbox" name="isWork" defaultValue={false} onChange={(event) => {setIsWork(event.target.checked)}}/>
        </label>

        <button onClick={submitNewContact}>Submit</button>
      </div>

      <nav>
        <Link to="/" className="button">Return Home</Link>
      </nav>
    </div>
  );
}

export default App;
