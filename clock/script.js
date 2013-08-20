var checkTime = function(i){
    if(i<10){
        i = "0"+i;
    }
    return i;
};

var startTime = function(){
    var today = new Date();
    var h = today.getHours();
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    document.getElementById('c').innerHTML = h + ':' + m + ':' + s;

    setTimeout('startTime()', 1000);
};