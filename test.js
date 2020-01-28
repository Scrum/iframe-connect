const test = require('ava');
const {JSDOM} = require('jsdom');

test('first iframe test', t => {
	t.plan(1);

	return JSDOM.fromFile('./index.html', {}).then(dom => {
		const iframe = dom.window.document.querySelector('iframe');
		t.true(iframe instanceof dom.window.HTMLIFrameElement);
	});
});

