import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";

// reference for next video if I need it -- https://www.youtube.com/watch?v=_S2GKnFpdtE
// Start - sudo /usr/local/mysql/support-files/mysql.server start
// Stop - sudo /usr/local/mysql/support-files/mysql.server stop

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [data, setData] = useState([])

  useEffect (() => {
    Axios.get('http://localhost:8080/getContacts')
    .then((response) => {
      setData(response.data)
    })
  }, [])

  const submitNewContact = () => {
    Axios.post('http://localhost:3001/api/insert',{
      firstName: firstName, 
      lastName: lastName
    }).then((response) => {
      alert("Successful Insert");
    })
  }

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div className='inputForm'>
        <input type="text" name="firstName" placeholder="First Name" onChange={(event) => {setFirstName(event.target.value)}}/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={(event) => {setLastName(event.target.value)}}/>
        <button onClick={submitNewContact}>Submit</button>
      </div>
      {data.map((val) => {
          return <p>Name: {val}</p>
        })}
    </div>
  );
}

export default App;
