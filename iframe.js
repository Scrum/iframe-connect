import IframeConnect from './iframe-connect.js';

const target = window.parent;
const origin = 'http://localhost:8000';

new IframeConnect({target, origin});
