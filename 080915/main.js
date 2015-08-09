/**
 * Created by Hernan Y.Ke on 2015/8/9.
 */
var setTime = function(){
    var d = new Date();
    var seconds = d.getSeconds();
    var time = d.toLocaleTimeString();

    var style = {
        'backgroundColor': "hsla(" + seconds *3 + ",80%,20%,0.9)",
        'color': 'hsla(' + (seconds*3) +', 90%, 50%, 1)',
        'textShadow': '0px 0px 5px hsla(' + (seconds*3) +', 100%, 70%, .5)',
        'borderColor': 'hsla(' + (seconds*3) +', 50%, 20%, .4)'
    }

    $('h1').text(time).css(style);
    setInterval(setTime,1000);
}

setTime();