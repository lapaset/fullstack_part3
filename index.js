const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())

morgan.token('data', (req, res) => {
    if (req.method == 'POST')
        return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))


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

app.post('/api/persons', (req, res) => {
    const generateId = () => Math.floor(Math.random() * Math.floor(3000000))

    if (!req.body.name)
        return res.status(400).json({ error: 'name missing' })
    if (!req.body.number)
        return res.status(400).json({ error: 'number missing' })
    if (persons
            .map(p => p.name.toLowerCase())
            .includes(req.body.name.toLowerCase()))
        return res.status(400).json({ error: 'name must be unique' })

    const person = {
        name: req.body.name,
        number: req.body.number,
        id: generateId()
    }


    persons = persons.concat(person)
    res.json(person)
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})