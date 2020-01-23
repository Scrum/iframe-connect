import IframeConnect from './iframe-connect.js';

const target = document.querySelector('iframe').contentWindow;
const origin = 'http://localhost:8000';
new IframeConnect({target, origin});
