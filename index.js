// console.log('Hello world')
const express = require('express')
const { request, response } = require('express')
 
const app = express()

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.delete('/api/notes/:id', (req, res) => {
  const {id} = request.params
  notes.filter(note=> note.id ===id)

  response.status(204).end()
})

app.get('/api/notes/:id', (request, response) => 
{
  const {id} = request.params
  const note = notes.find(note => note.id == parseInt(id) )

  if(!note) return `${id} not found`

  response.json(note)
})

const PORT = 3030
app.listen(PORT,() => {
console.log('App is running on port', PORT)
})