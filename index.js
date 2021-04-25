
const http = require('http')
const express = require('express')
const app = express()

let alumno = [
    {id: '1', nombre: 'Luis', numero: '987654321'},
    {id: '2',nombre: 'Juan', numero: '987654322'},
    {id: '3',nombre: 'Michael', numero: '987654323'},
    {id: '4',nombre: 'Angel', numero: '987654324'}
]

app.get('/', (request, response) => {
    response.json(alumno)
})

app.get('/info', (request, response) => {
    const cantidad = alumno.length
    response.send('<h1>Hay ' + cantidad + ' personas en la agenda</h1>')
})


app.get('/user/:id', (request, response) => {
    const id = request.params.id
    const note = alumno.find(alumno => alumno.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})