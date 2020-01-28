const http = require('http');
const test = require('ava');
const {JSDOM} = require('jsdom');
const listen = require('test-listen');
const app = require('./app');

test.before(async t => {
	t.context.server = http.createServer(app);
	t.context.baseUrl = await listen(t.context.server);
});

test.after.always(t => {
	t.context.server.close();
});

test('title', async t => {
	const {window} = await JSDOM.fromURL(t.context.baseUrl, {});
	const iframe = window.document.querySelector('iframe');
	t.true(iframe instanceof window.HTMLIFrameElement);
});
