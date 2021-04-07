// Vamos a crear un servidor con NodeJS que va a recibir cualquier petición que hagamos a nuestra IP local; y concretamente al puerto 3000

// Utilizamos el módulo 'http'
const http = require('http')

// Creo un servidor. Especifico que cada vez que se haga una petición a este servidor, se invoque la función 
const server = http.createServer((req, res)=> {
  console.log('He recibido una petición del cliente')
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>El servidor funciona correctamente.</h1>')
  res.write('-------------------------------------')
  res.end()

})

//Empiezo a escuchar peticiones en el puerto 3000
server.listen(3000)
//Puerto 3000 es una convención
//Para probar realmente usamos el puerto 80
//ssh port 22
//comando para saber ip: ipconfig -dns
