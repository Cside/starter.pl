// http://tokuhirom.mit-license.org
(function () {
"use strict";

var global = this;

var MyModule;
if (typeof exports !== 'undefined') {
    MyModule = exports;
} else {
    global.MyModule = MyModule = {};
}
MyModule.exampleMethod = exampleMethod;

function exampleMethod () {
}


}).call(this);
