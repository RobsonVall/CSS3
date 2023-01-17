var y, n=0, ny=0, rotYINT;

function rotateYDIV() {
    y = document.getElementById("dv1");
    clearInterval(rotYINT);
    rotYINT = setInterval("startYRotate()", 10);
    //alert("teste");
}

function startYRotate () {
    ny = ny + 1;
    y.style.Transform = "rotateY(" + ny + "deg) translate(200px, 200px)";
    y.style.webkitTransform = "rotateY(" + ny + "deg) translate(200px, 200px)";
    y.style.OTransform = "rotateY(" + ny + "deg) translate(200px, 200px)";
    y.style.MozTransform = "rotateY(" + ny + "deg) translate(200px, 200px)";
    if((ny == 180) || (ny >= 360)) {
        clearInterval(rotYINT);
        if (ny >= 360) {
            ny = 0;
        }
    }

}