// VARIABLES
var date = new Date();
//var startTime = date.getSeconds();
var startTime; // = date.getTime();
var endTime;

// FUNCTIONS
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getShape() {
    if (getRandomInt(1,2) === 1) {
        return "rect";
    } else {
        return "circle";
    }
}

function getSubHex() {
    var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var first = hex[getRandomInt(0,hex.length-1)];
    var second = hex[getRandomInt(0,hex.length-1)];
    return first + second;
}

function getRandomColor() {
    var red = getSubHex();
    var green = getSubHex();
    var blue = getSubHex();
    return "#" + red + green + blue;
}

function drawShape() {
    var shape = getShape();
    var color = getRandomColor();
    var svg = "";
    if (shape === "circle") {
        svg = '<' + shape + ' cx="50" cy="50" r="40" fill="' + color + '"/>';
    } else {
        svg = '<' + shape + ' width="100" height="100" fill="' + color + '"/>';
    }

//    document.getElementById("shape").style.visibility = "hidden";
    document.getElementById("shape").style.top = getRandomInt(150,window.innerHeight - 100);
    document.getElementById("shape").style.left = getRandomInt(10,window.innerWidth - 100);
    document.getElementById("shape").innerHTML = svg;
    document.getElementById("shape").style.visibility = "visible";
    startTime = new Date().getTime();
}

// MAIN
drawShape();

document.getElementById("shape").onclick = function () {
    endTime = new Date().getTime();
    document.getElementById("shape").style.visibility = "hidden";
    document.getElementById("time").innerHTML = (endTime - startTime) / 1000;
//    drawShape();
    setTimeout(drawShape,getRandomInt(500,2000));
//    document.getElementById("shape").style.visibility = "visible";
} 

