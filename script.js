const button = document.querySelector('.btn');
const bulb = document.querySelector('.bulb');
button.addEventListener('click', function(){
    if(bulb.src.match("bulboff")){
        bulb.src = "bulbon.jpeg";
        button.innerHTML="Turn off";
    }
    else{
        bulb.src = "bulboff";
        button.innerHTML = "Turn on";
    }
})