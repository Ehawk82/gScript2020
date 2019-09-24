/*global functions*/
function bySel(x) { return document.querySelector(x) };
function byId(x) { return document.getElementById(x) };
function byClass(x) { return document.getElementsByClassName(x) };
function bySelAll(x) { return document.querySelectorAll(x) };
function deleteThis(x,y) { return setTimeout(function(){ x.remove()},y)};
function makeFull(x) {return x.className = x.className + "_full" };
function takeFull(x) { var y,z; return y = x.className.split('_full'), z = y[0], x.className = z };
function createEle(x) { return document.createElement(x) };
function byTag(x, y) { if (!y || y === null) {y = 0}  return document.getElementsByTagName(x)[y] };
function makeLock(x) { return x.className = x.className + "_locked" };
function takeLock(x) { var y, z; return y = x.className.split("_locked"), z = y[0], x.className = z };
function myHeight() { return screen.height };
function myWidth() { return screen.width };
function thisHeight(x) { return x.clientHeight };
function thisWidth(x) { return x.clientWidth };
function makeLeft(x) {return x.className = x.className + "_left" };
function takeLeft(x) { var y,z; return y = x.className.split('_left'), z = y[0], x.className = z };
function makeCenter(x) {return x.className = x.className + "_center" };
function takeCenter(x) { var y,z; return y = x.className.split('_center'), z = y[0], x.className = z };
function makeRight(x) {return x.className = x.className + "_right" };
function takeRight(x) { var y,z; return y = x.className.split('_right'), z = y[0], x.className = z };
function makeFade(x) {return x.className = x.className + "_fade" };
function takeFade(x) { var y,z; return y = x.className.split('_fade'), z = y[0], x.className = z };
/*global variables*/
var ts = Math.round(new Date().getTime()/1000);