var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastPosX, lastPosY;
var color = "lightgreen"
var widhtLine = 5;
var width = screen.width;
var newWidth = screen.width - 70;
var newHeight = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden"
}


canvas.addEventListener("mousedown", myMouseDown)
function myMouseDown(e) {
    mouseEvent = "mouseDown"
}
canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e) {
    mouseEvent = "mouseUp"
}
canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e) {
    mouseEvent = "mouseLeave"
}
canvas.addEventListener("mousemove", myMouseMove)
function myMouseMove(e) {
    posMouseX = e.clientX - canvas.offsetLeft;
    posMouseY = e.clientY - - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = widhtLine;
        ctx.moveTo(lastPosX, lastPosY);
        ctx.lineTo(posMouseX, posMouseY);
        ctx.stroke()
    }
    lastPosX = posMouseX;
    lastPosY = posMouseY;
}

canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) {
    lastPosX = e.touches[0].clientX - canvas.offsetLeft;
    lastPosY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove)

function myTouchMove(e) {
    currentPosOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPosOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = widhtLine;
    ctx.moveTo(lastPosX, lastPosY);
    ctx.lineTo(currentPosOfTouchX, currentPosOfTouchY);
    ctx.stroke();
    lastPosX = currentPosOfTouchX;
    lastPosY = currentPosOfTouchY
}

function clearc(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}