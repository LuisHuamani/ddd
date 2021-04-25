
const http = require('http')
const express = require('express')
const app = express()

app.use(express.json())

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

app.delete('/user/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = alumno.filter(alumno => alumno.id !== id)
  
    response.status(204).end()
})

app.post('/api/alumnos', (request, response) => {

    if(!request.body.nombre){
        response.status(400).send({ error: 'name must be unique' })
        return;
    }else if(!request.body.numero){
        response.status(400).send({ error: 'number must be unique' })
        return;
    }

    const nombres = alumnos.map((object)=>{return object['nombre']})
    if(nombres.includes(request.body.nombre)){
        response.status(400).send({ error: 'Este nombre ya existe' })
        return;
    }

    const alumno = {
        id: Math.round(Math.random()*100000),
        nombre: req.body.nombre,
        numero: req.body.numero,
    };
    console.log(alumno)
    alumnos.push(alumno);
    request.send(alumno);
    response.json(alumno)
});


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})