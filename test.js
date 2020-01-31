const test = require('ava');
const {JSDOM} = require('jsdom');

test.cb('title', t => {
	JSDOM.fromFile('index.html', {
		resources: 'usable',
		runScripts: 'dangerously'
	}).then(dom => {
		dom.window.document.addEventListener('DOMContentLoaded', () => {
			class TestIframeConnect extends dom.window.IframeConnect {
				_listener({origin, data, source}) {
					if (this._origin === '*' || this._origin === origin) {
						t.deepEqual(data, {method: 'connect'});
						t.end();
					}
				}
			}
			new TestIframeConnect({target: dom.window});
		});
	});
});
