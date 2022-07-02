function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    // digi clock
    document.querySelector(".digihours").innerText =
      formatNumberString(hours);
    document.querySelector(".digiminutes").innerText =
      formatNumberString(minutes);
    document.querySelector(".digiseconds").innerText =
      formatNumberString(seconds);
  
    // classic clock
    const hoursEl = document.querySelector(".analoghours");
    hoursEl.style.setProperty("--hours", hours * 30 + "deg");
  
    const minutesEl = document.querySelector(".analogminutes");
    minutesEl.style.setProperty("--minutes", minutes * 6 + "deg");
  
    const secondsEl = document.querySelector(".analogseconds");
    secondsEl.style.setProperty("--seconds", seconds * 6 + "deg");
  
    document
      .querySelectorAll(".digidots")
      .forEach((e) => e.classList.toggle("digidots--hidden"));
  }
  
  function formatNumberString(n) {
    let s = "0" + n.toString();
    return s.slice(-2);
  }
  
  updateTime();
  setInterval(updateTime, 1000);