/**
 * Created by Hernan Y.Ke on 2015/8/8.
 */
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var c = document.getElementById('canv');
var w = c.width = window.innerWidth/1.5;
var h = c.height = window.innerHeight/1.5;

window.addEventListener('resize', function() {
    c.width = w = window.innerWidth/1.5;
    c.height = h = window.innerHeight/1.5;
}, false);

var $ = c.getContext('2d');
var u;

var draw = function(ang, dst) {
    var rings = 2;

     var u = -5;

    for(var i = 0;i<rings;i++){
        spc = Math.pow(2, (i + 1));
        sd = spc + dst * spc;
        x = w/2 +Math.cos(ang)*sd;
       y = h/2 +Math.sin(ang)*sd;
        s = sd/3;
        $.globalCompositeOperation="xor";

        $.fillStyle= "hsla("+  (i / u * 360) + ",100%, 50%, 1)"
        $.beginPath();
        $.arc(x,y,s*2,0,2*Math.PI);
        $.fill();
    }
}
a = 0;
var go = function(){
    $.clearRect(0, 0, w, h);
    a++;
    var v = 0;
    var circle = 8;

    for(var j = 0;j<circle;j++){
        ang = a / -600 + j/circle * Math.PI * 2;
        dst = v + (Math.sin(2* j / circle * Math.PI * 5) +
        2 + Math.sin(a / 5 + 5 * j / circle * Math.PI * 2) + 25) / 2;
        draw(ang, dst);
    }
    window.requestAnimFrame(go);
}

go();