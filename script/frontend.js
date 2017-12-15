var container = document.getElementById('container');
var containerBottom = document.getElementById('container-frame-bottom');
var containerTop = document.getElementById('container-frame-top');
var containerLeft = document.getElementById('container-frame-left');
var containerRight = document.getElementById('container-frame-right');

var containerViewRight = document.getElementById("container-view-right");
var containerViewLeft = document.getElementById("container-view-left");
var containerViewBottom = document.getElementById("container-view-bottom");
var containerViewCenter = document.getElementById("container-view-center");

var audio = new Audio('audio/click.ogg');



var state = "close";
container.classList.add('close');

var closeContainer = function(e){
    
    e.stopPropagation();
    if(state != "close"){
        state = "close";
        audio.play();
        container.className = "container close"
        containerViewRight.className = 'view-right hide';
        containerViewLeft.className = 'view-left hide';
        containerViewBottom.className = 'view-bottom hide';
        containerViewCenter.className = 'view-center close';
    }

}
container.onclick = closeContainer;


containerRight.onclick = function(e){
    audio.play();
    e.stopPropagation();
    if(state != "close"){
        closeContainer(e); 
    }
    else{
        state = "open";
        containerTop.style.left = 0;
        containerTop.style.right = "";

        containerBottom.style.left = 0;
        containerBottom.style.right = "";

        containerViewRight.classList.remove('hide');
        containerViewRight.classList.add('expand');
        
        container.classList.add('expandRight');
        container.classList.remove('close');
    }
}

containerLeft.onclick = function(e){
    audio.play();
    e.stopPropagation();
    if(state != "close"){
        closeContainer(e); 
    }
    else{
        state = "open";
        containerTop.style.right = 0;
        containerTop.style.left = "";

        containerBottom.style.right = 0;
        containerBottom.style.left = "";

        containerViewLeft.classList.remove('hide');
        containerViewLeft.classList.add('expand');

        containerViewCenter.classList.add('expand');

        container.classList.add('expandLeft');
        container.classList.remove('close');
    }
}


containerBottom.onclick = function(e){
    audio.play();
    e.stopPropagation();
    if(state != "close"){
        closeContainer(e); 
    }
    else{
        state = "bottom";

        containerViewBottom.classList.remove('hide');
        containerViewBottom.classList.add('expand');


        container.classList.add('expandBottom');
        container.classList.remove('close');
    }
}


containerTop.onclick = function(e){
    audio.play();
    e.stopPropagation();
    if(state != "close"){
        closeContainer(e); 
    }
    else{
        state = "top";
        container.classList.add('expandTop');
        container.classList.remove('close');
    }
}