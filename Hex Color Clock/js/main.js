(function(){
let clock = document.querySelector('.clock');
let hexcolor = document.querySelector('.hexcolor');

function tclock(){
    let time = new Date();
        let hours   = (time.getHours() % 12).toString();
        let minutes  = (time.getMinutes()).toString();
        let seconds = (time.getSeconds()).toString();

        if(hours.length < 2){
            hours = '0' + hours;
        }
        if (minutes.length < 2) {
            minutes = '0' + minutes;
          }
        
          if (seconds.length < 2) {
            seconds = '0' + seconds;
          }

        let clockStr = hours + ' : ' + minutes + ' : ' + seconds;
        let hexcolorStr = '#' + hours +minutes+seconds;
        clock.textContent = clockStr;
        hexcolor.textContent = 'Hex color : ' + hexcolorStr;
        document.body.style.backgroundColor = hexcolorStr;

        
}
tclock();
setInterval(tclock,1000);
    
})();