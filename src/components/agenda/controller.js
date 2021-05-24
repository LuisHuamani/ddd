import MongoAlumnoRepositorio from './infraestructure/MongoAlumnoRepositorio'
import CrearAlumno from './application/crearAlumno'

const AlumnoRepository = new MongoAlumnoRepositorio()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const crearAlumno = async (req, res, next) => {
  try {
    const query = CrearAlumno({ AlumnoRepository })
    const alumno = await query(req.body)
    res.status(201).json({
      data: alumno,
      message: 'Created',
    })
  } catch (e) {
    next(e)
  }
}