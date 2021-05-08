var debounce = function(fn,delay){
    var timer;
    return function(){
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(fn, delay);
    }
}

var throttle = function(fn, delay){
    var timer;
    return function(){
        if (!timer){
            timer = Date.now()
        } else if(Date.now() - timer > delay){
            fn();
            timer = null;
        }
    }
}