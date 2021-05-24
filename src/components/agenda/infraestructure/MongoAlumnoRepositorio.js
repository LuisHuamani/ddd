import MongoLib from '../../../lib/mongo'

class MongoAlumnoRepositorio { // implement an interface
  constructor () {
    // super()
    this.collection = 'agenda'
    this.mongoDB = new MongoLib()
  }

  async add (alumno) {
    const id = await this.mongoDB.create(this.collection, alumno)
    return { id, ...alumno }
  }
}

export default MongoAlumnoRepositorio