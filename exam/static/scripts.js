if(localStorage.getItem("count_timer")){
    var count_timer = localStorage.getItem("count_timer");
} else {
    var count_timer = 10*30;
}
var minutes = parseInt(count_timer/60);
var seconds = parseInt(count_timer%60);
function countDownTimer(){
    if(seconds < 10){
        seconds= "0"+ seconds;
    }if(minutes < 10){
        minutes= "0"+ minutes;
    }
    const get= document.getElementById('button');
    document.getElementById("countdown-box").innerHTML = "Time Left : "+minutes+" Minutes "+seconds+" Seconds";
    if(count_timer <= 0){
         localStorage.clear("count_timer");

         document.getElementById("countdown-box").innerHTML = 'time expired' 
         get.click();

    }
   
     else {
        count_timer = count_timer -1 ;
        minutes = parseInt(count_timer/60);
        seconds = parseInt(count_timer%60);
        localStorage.setItem("count_timer",count_timer);
        setTimeout("countDownTimer()",1000);
    }
}
setTimeout("countDownTimer()",1000);

function clickEvent() {
    localStorage.clear("count_timer");
    //window.opener = self;
    //window.close()
    console.log("Click Event triggered")
}

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href);
};


//function preventScroll(e){
    //e.preventDefault();
    //e.stopPropagation();

    //return false;
//}

//function disable(){
  //document.querySelector('.countdown-box').addEventListener('wheel', preventScroll);
//}
