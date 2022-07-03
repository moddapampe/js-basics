const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

window.setInterval(function() {
  let currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();

  hourDeg = 180 + h * 30 + m * 0.5;
  minuteDeg = 180 + m * 6;
  secondDeg = 180 + s * 6;

  hourHand.style.transform = "rotate(" + hourDeg + "deg)";

  minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";

  secondHand.style.transform = "rotate(" + secondDeg + "deg)";
}, 1000);


// ------------------------- digital -----------------------------//

setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();

            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
 
            let currentTime = hour + ":"
                + min + ":" + sec;
 
            document.getElementById("digiclock")
                .innerHTML = currentTime;
        }
 
        showTime();