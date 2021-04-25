const http = require('http')

const alumno = [
    {id: '1', nombre: 'Luis', numero: '987654321'},
    {id: '2',nombre: 'Juan', numero: '987654322'},
    {id: '3',nombre: 'Michael', numero: '987654323'},
    {id: '4',nombre: 'Angel', numero: '987654324'}
]

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(alumno))
})

const PORT = 3001
app.listen(PORT)
console.log('listening on port ' + PORT)