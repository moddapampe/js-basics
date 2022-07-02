function TimeUpdate() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();


document.querySelector('.digihours').innerText = formatNumberString(hours);
document.querySelector('.digiminutes').innerText = formatNumberString(minutes);
document.querySelector('.digiseconds').innerText = formatNumberString(seconds);

const hoursElement = document.querySelector(".analoghours");
hoursElement.style.setProperty("--hours", hours * 30 + "deg");

const minutesElement = document.querySelector(".analogminutes");
minutesElement.style.setProperty("--minutes", minutes * 6 + "deg");

const secondsElement = document.querySelector(".analogseconds");
secondsElement.style.setProperty("--seconds", seconds * 6 + "deg");

document.querySelectorAll(".digidot");
forEach((e) => e.classList.toggle("digiclock dot--hidden"));
}  

 function formatNumberString(n) {
    let s = "0" + n.toString();
    return s.slice(-2);
}
TimeUpdate();
setInterval(TimeUpdate, 1000);