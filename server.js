const morgan = require('morgan');
const app = require('./app');

app.use(morgan('dev'));

const listener = app.listen(8000, () => {
	console.log(`Example app listening on http://localhost:${listener.address().port}`);
});
