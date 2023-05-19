const express = require('express')
const data = require('./mock_data')
const app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get("/sum", (req, res) => {
    let n1 = parseFloat(req.query.n1);
    let n2 = parseFloat(req.query.n2);

    let sum = n1 + n2;

    res.send(`Sum is: ${sum}`);
})

app.get("/users/all", (req, res) => {
    let users = data.get_all_users();
    res.send(users);
})

app.post("/users/add", (req,res) => {
    let result = data.add_user(req.body)
    if (result)
        res.send("User added successfully")
    else
        res.status(500).send("User not added")
})


app.get("/users/by-id", (req, res) => {
    let user = data.get_user_by_user_id(parseInt(req.query.user_id));
    if (user)
        res.send(user)
    else
        res.status(404).send("user not found")
})

app.listen(3000, () => {
    console.log('Example app listening on 3000')
})