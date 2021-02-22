"use strict";
exports.__esModule = true;
var App_svelte_1 = require("src/components/App.svelte");
require("./normalize.css");
var ddd = '';
var dffff = function (val) {
    console.log(val);
};
console.log(ddd);
dffff(45);
dffff("45");
var app = new App_svelte_1["default"]({
    target: document.body,
    props: { name: 'Alex' }
});
exports["default"] = app;
