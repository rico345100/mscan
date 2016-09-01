"use strict";
const mscan = require('./index');

mscan.scan('./')
.then((result) => {
	console.log(result);
})
.catch((err) => {
	console.error(err);
});