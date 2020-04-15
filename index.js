const express = require('express')
const app = express()

let persons = [
    {
        "name": "kalle",
        "number": "8942",
        "id": 1
    },
    {
        "name": "ville",
        "number": "899847242",
        "id": 2
    },
    {
        "name": "ada",
        "number": "580742",
        "id": 3
    },
    {
        "name": "linda",
        "number": "7462913",
        "id": 4
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})