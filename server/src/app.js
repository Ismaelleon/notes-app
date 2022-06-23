const express = require('express'),
	path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/.next/server/pages/index.html'))
})

app.get('*', (req, res) => {
	console.log(req.url)
	if (req.url.slice(0, 6) === '/_next') {
		res.sendFile(path.join(__dirname, 'client/.next/' + req.url.slice(7)))
	}
})

module.exports = app;
