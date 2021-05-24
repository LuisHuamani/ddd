/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAlumnoRepositorio')} obj.AlumnoRepository
 */
export default ({ AlumnoRepository }) => {
    return async ({ nombre,numero }) => {
        const nuevoAlumno = {
            nombre:nombre,
            numero:numero
        }
        return await AlumnoRepository.add(nuevoAlumno)
    }
  }