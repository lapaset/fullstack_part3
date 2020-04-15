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

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    if (!person) {
        console.log(`id not found`)
        res.status(404).end()
    }
    else
        res.json(person)
})

app.get('/info', (req, res) => {
    const date = new Date()
    res.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>`)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})