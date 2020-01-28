// const fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/iframe.html', (req, res) => {
	// SetTimeout(() => {
	res.sendFile(path.join(__dirname, '/iframe.html'));
	// }, 6000)
});

app.get('/site.js', (req, res) => {
	// Res.set({
	//   'Content-Type': 'application/javascript'
	// });
	setTimeout(() => {
		res.sendFile(path.join(__dirname, '/site.js'));
	}, 10000);
});

app.get('/iframe.js', (req, res) => {
	// Res.set({
	//   'Content-Type': 'application/javascript'
	// });
	// setTimeout(() => {
	res.sendFile(path.join(__dirname, '/iframe.js'));
	// }, 1000000);
});

app.get('/iframe-connect.js', (req, res) => {
	// Res.set({
	//   'Content-Type': 'application/javascript'
	// });
	// setTimeout(() => {
	res.sendFile(path.join(__dirname, '/iframe-connect.js'));
	// }, 1000000);
});

// App.get('/style.css', function (req, res) {
//   res.set({
//     'Content-Type': 'text/css'
//   });
//   setTimeout(() => {
//     res.send(`body {margin: 0;color: red;}`);
//   }, 3000);
// });

// app.get('/style1.css', function (req, res) {
//   res.set({
//     'Content-Type': 'text/css'
//   });
//   setTimeout(() => {
//     res.send(`body {margin: initial;color: olive;}`);
//   }, 20000);
// });

const listener = app.listen(8000, () => {
	console.log(`Example app listening on http://localhost:${listener.address().port}`);
});
