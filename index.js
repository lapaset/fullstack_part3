require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('data', req => {
  if (req.method === 'POST')
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(persons => persons.map(person => person.toJSON()))
    .then(persons => {
      res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person)
        res.json(person.toJSON())
      else
        res.status(404).end()
    })
    .catch(error => next(error))
})

app.get('/info', (req, res) => {
  const date = new Date()

  Person.countDocuments()
    .then(count => {
      res.send(`<p>Phonebook has info for ${count} people</p>
            <p>${date}</p>`)
    })
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => {
      if (result)
        res.status(204).end()
      else
        res.status(404).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
  const person = {
    name: req.body.name,
    number: req.body.number,
  }

  Person.findByIdAndUpdate(req.params.id, person, { new:true, runValidators: true, context: 'query' })
    .then(updatedPerson => updatedPerson.toJSON())
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const person = new Person({
    name: req.body.name,
    number: req.body.number
  })

  person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedPerson => {
      res.json(savedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError')
    return res.status(400).send({ error: 'malformatted id' })
  if (error.name === 'ValidationError')
    return res.status(400).json({ error: error.message })
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})