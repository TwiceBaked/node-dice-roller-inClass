const express = require('express')
app = express()

const cors = require("cors")

var url = require('url');

const port = process.env.PORT || 3000

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))

app.get('/about', (request, response) => {
	console.log('Calling "/about" on the Node.js server.')
	response.type('text/plain')
	response.send('This website is the proof of concept for a Node.js server the a Dice Roller')
})

app.get('/api/ping', (request, response) => {
	console.log('Calling "/api/ping"')
	response.type('text/plain')
	response.send('ping response')
})

// Return a random number
app.get('/rollD6', (request, response) => {
	console.log('Calling "/rollD6" on the Node.js server.')
	const imagePath = `${(Math.floor(Math.random() * 6) + 1).toString()}-Di.png`;
	response.type('image/png')
	res.sendFile(imagePath)
})

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
