const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'programUser',
    password: 'Password!1',
    database: 'strangerThingsContactDB'
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/insert', (req, res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const sqlInsert = "INSERT INTO contacts (firstName, lastName) VALUES (?, ?)";
    db.query(sqlInsert, [firstName, lastName], (err, result) => {
        console.log(result)
    })
})

app.get('/api/get', (req, res) => {
    const sqlGet = "SELECT * FROM contacts"
    db.query(sqlGet, (err, result) => {
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('running on port 3001')
})