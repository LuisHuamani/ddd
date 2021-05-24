import express from 'express';
import { alumno } from '../utils/mockup'
import { crearAlumno } from '../components/agenda/controller'

const router = express.Router()

router.get('/', async(request, response) => {   
    response.json(alumno)
})

router.get('/info', (request, response) => {
    const cantidad = alumno.length
    response.send('<h1>Hay ' + cantidad + ' personas en la agenda</h1>')
})


router.get('/user/:id', (request, response) => {
    const id = request.params.id
    const note = alumno.find(alumno => alumno.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

router.delete('/user/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = alumno.filter(alumno => alumno.id !== id)
  
    response.status(204).end()
})

router.post('/api/alumnos', crearAlumno)

export default router