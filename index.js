/*global variables*/
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var dys = ["0","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"];

/*global functions*/
const bySel    = x => document.querySelector(x),
      byId     = x => document.getElementById(x),
      byClass  = x => document.getElementsByClassName(x),
      bySelAll = x => document.querySelectorAll(x);

const deleteThis = (x, y) => setTimeout( () => x.remove(), y),
      createEle  = x      => document.createElement(x);

const byTag = (x, y) => document.getElementsByTagName(x)[y || 0];

const tfs = x => openFullscreen(body);

const thisHeight = x =>  x.clientHeight;
      thisWidth  = x =>  x.clientWidth;

const myHeight = () => screen.height;
      myWidth  = () => screen.width;

const make = (x, where) => make(x, where);

const makeCollide = x => make(x, '_collide'),
      makeLeft    = x => make(x, '_left'),
      makeCenter  = x => make(x, '_center'),
      makeRight   = x => make(x, '_right'),
      makeFade    = x => make(x, '_fade'),
      makeFull    = x => make(x, '_full'),
      makeLock    = x => make(x, '_locked');

const take = (x, where) => x.className = x.className.split(where)[0];

const takeLeft   = x => take(x, '_left'),
      takeCenter = x => take(x, '_center'), 
      takeRight  = x => take(x, '_right'),  
      takeFade   = x => take(x, '_fade'),   
      takeFull   = x => take(x, '_full');
      takeLock   = x => take(x, '_locked');

function openFullscreen(x,y) { return function() { x.disabled = true, y.disabled = false; if (document.body.requestFullscreen) {return document.body.requestFullscreen();} else if (document.body.mozRequestFullScreen) { /* Firefox */document.body.mozRequestFullScreen();} else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */document.body.webkitRequestFullscreen();} else if (document.body.msRequestFullscreen) { /* IE/Edge */document.body.msRequestFullscreen();} }}
function closeFullScreen(x,y) { return function(){ x.disabled = true, y.disabled = false; if (document.exitFullscreen) {document.exitFullscreen();} else if (document.mozCancelFullScreen) { /* Firefox */document.mozCancelFullScreen();} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */document.webkitExitFullscreen();} else if (document.msExitFullscreen) { /* IE/Edge */document.msExitFullscreen();} }};
function currentTime(){ return Math.round(new Date().getTime()/1000) };
function runTimer(x){ return setTimeout(function(){ x.innerHTML = currentTime(); runTimer(x); },900) };
function inputValidate(x,y){ return function(){ var d = x.value.trim(); if (d.length === 0) { return false } else { x.value = ""; /*work in progress*/ } } };

/* local storage */
function saveLS(x, y) { return localStorage.setItem(x, JSON.stringify(y)) };
function loadLS(x) { return localStorage.getItem(x) };
function parseLS(x) { var y = loadLS(x), z = JSON.parse(y); return z };
function clearLS() { return localStorage.clear() };
function removeLSitem(x) { return localStorage.removeItem(x) };
function LSinit(x,y) {var keyname = localStorage.getItem(x);if (!keyname || keyname === null) {localStorage.setItem(x, JSON.stringify(y));};};

/* session storage */
function saveSS(x, y) { return sessionStorage.setItem(x, JSON.stringify(y)) };
function loadSS(x) { return sessionStorage.getItem(x) };
function parseSS(x) { var y = loadSS(x), z = JSON.parse(y); return z };
function clearSS() { return sessionStorage.clear() };
function removeSSitem(x) { return sessionStorage.removeItem(x) };
function SSinit(x,y) {var keyname = sessionStorage.getItem(x);if (!keyname || keyname === null) {sessionStorage.setItem(x, JSON.stringify(y));} else {var k = x.split("user_");var g = +k[1];g++;var i = x.split(k[1]);var z = i[0] + g;}};

/*Date Formating*/
function formatDateObject(x){
	var date = new Date(x),
		year = date.getFullYear(),
		month = date.getMonth(),
		day = date.getDate(),
		weekDay = date.getDay(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();
		if (hours   < 10) {hours   = "0"+hours;}
    	if (minutes < 10) {minutes = "0"+minutes;}
    	if (seconds < 10) {seconds = "0"+seconds;}
		var formatedDate = days[weekDay]+", "+months[month]+" "+dys[day]+", "+year+" - "+hours+":"+minutes+":"+seconds; 

	return formatedDate;
}
