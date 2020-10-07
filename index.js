const express = require('express')
const app = express()
require('dotenv').config()

app.disable('x-powered-by')

const contacts = [
  { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
  },
  { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
  },
  { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
  },
  { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
  },
  { 
    "name": "Mary slessor", 
    "number": "39-23-6423122",
    "id": 5
  }
]

app.get('/api/contacts/', (req, res) => {
  res.json(contacts)
})

app.get('/info/', (req, res) => {
  const lengthh = contacts.length
  const created = new Date(Date.now())
  res.send(`Phonebook has info for ${lengthh} people <br><br><br> ${created}` )
})

app.get('/api/contacts/:id', (req, res) => {
  const {id} =  req.params

  const contact = contacts.find(contact => contact.id == id)

  if(!contact) return res.status(404).send(`contact with ID of ${id} not found`)

  res.json(contact)

})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('App is running on port', PORT)
})