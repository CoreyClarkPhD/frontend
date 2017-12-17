mixerAuth();

var container = document.getElementById('container');
var containerBottom = document.getElementById('container-frame-bottom');
var containerTop = document.getElementById('container-frame-top');
var containerLeft = document.getElementById('container-frame-left');
var containerRight = document.getElementById('container-frame-right');

var containerViewRight = document.getElementById("container-view-right");
var containerViewRightButtons = document.getElementById('top-buttons')
var containerViewLeft = document.getElementById("container-view-left");
var containerViewBottom = document.getElementById("container-view-bottom");
var containerViewCenter = document.getElementById("container-view-center");

var audio = new Audio('audio/click.ogg');
var mute = document.getElementById('mute');
var muted = false;

mute.onchange = function(e){
    if(mute.checked){
        muted = true;
    }
    else
        muted = false;
}
var playClick = function(){
    if(!muted){
        audio.play();
    }
}


var state = "close";
container.classList.add('close');

var closeContainer = function(e){
    
    e.stopPropagation();
    if(state != "close"){
        state = "close";
        playClick();
        container.className = "container close"
        containerViewRight.className = 'view-right hide';
        //containerViewRightButtons.className = 'view-right-top-buttons-container hide';
        containerViewLeft.className = 'view-left hide';
        containerViewBottom.className = 'view-bottom hide';
        containerViewCenter.className = 'view-center view-center-image-bmt close';
    }

}
containerViewCenter.onclick = closeContainer;


containerRight.onclick = function(e){
    playClick();
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

        // containerViewRightButtons.classList.add('expand');
        // containerViewRightButtons.classList.remove('hide');

    }
}
container.addEventListener('transitionend', function(e){
    e.stopImmediatePropagation();
    if(e.eventPhase == 3){
        console.log ("transition ended");
        console.log("Target: " + e.currentTarget.className);

        //if(e.currentTarget.className)
    }
    
});

containerLeft.onclick = function(e){
    playClick();
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
    playClick();
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
    playClick();
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