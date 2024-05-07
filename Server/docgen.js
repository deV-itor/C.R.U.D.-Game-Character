const swaggerAutogen = require('swagger-autogen')()
const outputFile= './swagger_output.json'
const endpointsFiles = ['./rota-dummy.js']
swaggerAutogen(outputFile, endpointsFiles).then(()=>{
    require('./index.js')
})

//correto.