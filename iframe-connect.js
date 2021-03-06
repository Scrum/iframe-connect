(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.IframeConnect = factory();
	}
})(this, () => {
	class IframeConnect {
		constructor({target, origin = '*'}) {
			this._connect = false;
			this._origin = origin;
			this._target = target;
			window.addEventListener('message', this._listener.bind(this));
			this._connection();
		}

		_listener({origin, data, source}) {
			if (this._origin === '*' || this._origin === origin) {
				console.log(origin, data, source);
			}
		}

		_send(message) {
			this._target.postMessage(message, this._origin);
		}

		_connection() {
			const method = 'connect';
			const message = {method};
			this._send(message);
		}
	}
	return IframeConnect;
});
