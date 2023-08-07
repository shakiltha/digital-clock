
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function digitalClock() {
    let currentTime = new Date()
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let ampm = document.querySelector('.ampm');    
    if(hours >= 12) {
        ampm.innerHTML = 'PM';
    } else {
        ampm.innerHTML = 'AM';
    }
   
    if(hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }
  
    hour.textContent = hours.toString().padStart(2, 0) + ' :';
    minute.textContent = minutes.toString().padStart(2, 0) + ' :';
    second.textContent = seconds.toString().padStart(2, 0);
    
}

setInterval(digitalClock, 1000);

