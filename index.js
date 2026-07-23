const express = require('express')

const app = express()

app.use(express.json());

const PORT = 3000;

let users = [
    {
        id: 1,
        name: "abi",
        email: "abc@gmail.com"
    },
    {
        id: 2,
        name: "abi",
        email: "abc@gmail.com"
    }
]
console.log("Hello from backend...");


console.log("hi...")
//get all users api
app.get("/users", (req, res) => {
    res.status(200).json(users);
})

//get one user by id

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id )

    if(!user) {
        console.log("user not found")
        return res.status(400).json({
            "message": "user not found"
        })
    }
    res.status(200).json(user)

})

//post api to add userdetails

app.post("/users/add", (req, res) => {
    const {id, name, email} = req.body;
    const newUser = {
        id: id,
        name: name,
        email: email
    }

    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(PORT, () => {
    console.log("Server started on port ", PORT);
})


