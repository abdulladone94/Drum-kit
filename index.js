// document.querySelectorAll("button")[0].addEventListener("click", handle);
// document.querySelectorAll("button")[1].addEventListener("click", handle);
// document.querySelectorAll("button")[2].addEventListener("click", handle);
// document.querySelectorAll("button")[3].addEventListener("click", handle);
// document.querySelectorAll("button")[4].addEventListener("click", handle);
// document.querySelectorAll("button")[5].addEventListener("click", handle);
// document.querySelectorAll("button")[6].addEventListener("click", handle);

// function handle (button) {
//     alert("I Got Clicked")
// }

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert("got a clicked")});
// }

// var drumButton = document.querySelectorAll(".drum").length;
// for (var i = 0; i<drumButton; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {alert("I Got Clicked")});
// }

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", audioSound);
// }

// function audioSound(){
//     var audio = new Audio("sounds/tom-1.mp3")
//     audio.play();
// }

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[0].addEventListener("click", function(){
//         var audio=new Audio("sounds/kick-bass.mp3");
//         audio.play();});}

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[1].addEventListener("click", function(){var audio=new Audio("sounds/tom-1.mp3");audio.play();});}
        
// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[2].addEventListener("click", function(){var audio=new Audio("sounds/tom-2.mp3");audio.play();});}
            
// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[3].addEventListener("click", function(){var audio=new Audio("sounds/tom-3.mp3");audio.play();});}
    
// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[4].addEventListener("click", function(){var audio=new Audio("sounds/tom-4.mp3");audio.play();});}
    
// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[5].addEventListener("click", function(){var audio=new Audio("sounds/crash.mp3");audio.play();});}

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[6].addEventListener("click", function(){var audio=new Audio("sounds/snare.mp3");audio.play();});}
    
// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         this.style.color="white"});
//     }
        
        
        // var audio=new Audio("sounds/kick-bass.mp3");
        // audio.play();});}


// only Click

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
//         var innerHtml = this.innerHTML;

//         switch (innerHtml) {
//             case "w":
//                 var audio1=new Audio("sounds/tom-1.mp3");
//                 audio1.play();        
//                 break;

//             case "a":
//                 var audio2=new Audio("sounds/tom-2.mp3");
//                 audio2.play();        
//                 break;

//             case "s":
//                 var audio3=new Audio("sounds/tom-3.mp3");
//                 audio3.play();        
//                 break;

//             case "d":
//                 var audio4=new Audio("sounds/tom-4.mp3");
//                 audio4.play();        
//                 break;

//             case "j":
//                 var audio5=new Audio("sounds/crash.mp3");
//                 audio5.play();        
//                 break;

//             case "k":
//                 var audio6=new Audio("sounds/kick-bass.mp3");
//                 audio6.play();        
//                 break;

//             case "l":
//                 var audio7=new Audio("sounds/snare.mp3");
//                 audio7.play();        
//                 break;

//             default: console.log(innerHtml);
                
//         }

//         });}



// Click And KeyPress

// for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
//         var innerHtml = this.innerHTML;
//         makeSound (innerHtml);

        
//         });}

// document.addEventListener("keypress", function(event) {

//     makeSound(event.key)
// });
    
//     function makeSound(key){
        

//         switch (key) {
//             case "w":
//                 var audio1=new Audio("sounds/tom-1.mp3");
//                 audio1.play();        
//                 break;

//             case "a":
//                 var audio2=new Audio("sounds/tom-2.mp3");
//                 audio2.play();        
//                 break;

//             case "s":
//                 var audio3=new Audio("sounds/tom-3.mp3");
//                 audio3.play();        
//                 break;

//             case "d":
//                 var audio4=new Audio("sounds/tom-4.mp3");
//                 audio4.play();        
//                 break;

//             case "j":
//                 var audio5=new Audio("sounds/crash.mp3");
//                 audio5.play();        
//                 break;

//             case "k":
//                 var audio6=new Audio("sounds/kick-bass.mp3");
//                 audio6.play();        
//                 break;

//             case "l":
//                 var audio7=new Audio("sounds/snare.mp3");
//                 audio7.play();        
//                 break;

//             default: console.log(innerHtml);
                
//     }
//     }

// Workign with button and click

// for (i=0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         btninner = this.innerHTML;
//         sndMkr(btninner);
//     })
// }

// document.addEventListener("keypress", function(event) {
//     sndMkr(event.key);
// });

// function sndMkr (key){
//     switch (key) {
//         case "w":
//             var a = new Audio ("sounds/tom-1.mp3");
//             a.play();
//             break;

//         case "a":
//             var b = new Audio ("sounds/tom-2.mp3");
//             b.play();
//             break;

//         case "s":
//             var c = new Audio ("sounds/tom-3.mp3");
//             c.play();
//             break;        

//         case "d":
//             var d = new Audio ("sounds/tom-4.mp3");
//             d.play();
//             break;

//         case "j":
//             var e = new Audio ("sounds/snare.mp3");
//             e.play();
//             break;

//         case "k":
//             var f = new Audio ("sounds/kick-bass.mp3");
//             f.play();
//             break;

//         case "l":
//             var g = new Audio ("sounds/crash.mp3");
//             g.play();
//             break;            
            
//         default:console.log (innerHTML);
//     }
// }


// Workign with button and click and button animation


for (i=0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        btninner = this.innerHTML;
        sndMkr(btninner);
        buttonAnimation(btninner);
    });
}

document.addEventListener("keypress", function(event) {
    sndMkr(event.key);
    buttonAnimation(event.key);
});

function sndMkr (key){
    switch (key) {
        case "w":
            var a = new Audio ("sounds/tom-1.mp3");
            a.play();
            break;

        case "a":
            var b = new Audio ("sounds/tom-2.mp3");
            b.play();
            break;

        case "s":
            var c = new Audio ("sounds/tom-3.mp3");
            c.play();
            break;        

        case "d":
            var d = new Audio ("sounds/tom-4.mp3");
            d.play();
            break;

        case "j":
            var e = new Audio ("sounds/snare.mp3");
            e.play();
            break;

        case "k":
            var f = new Audio ("sounds/kick-bass.mp3");
            f.play();
            break;

        case "l":
            var g = new Audio ("sounds/crash.mp3");
            g.play();
            break;            
            
        default:console.log (innerHTML);
    }
}

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout (function(){ document.querySelector("."+ currentKey).classList.remove("pressed")}, 200);
};













