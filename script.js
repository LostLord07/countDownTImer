let finalDate = new Date("16 Sept, 2023 12:00:00").getTime();

setInterval(()=>{
    let currentDate = new Date().getTime();
    let remainingTIme = finalDate - currentDate;
    let days = Math.floor((remainingTIme/(1000*24*60*60)));
    let hours = Math.floor((remainingTIme% (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((remainingTIme % (1000*60*60))/(1000*60));
    let seconds = Math.floor((remainingTIme % (1000*60))/1000); 

  
    let daysDisplay = document.getElementById('days');
    let hoursDisplay = document.getElementById('hours');
    let minutesDisplay =  document.getElementById('minutes');
    let secondsDisplay = document.getElementById('seconds');
    daysDisplay.value = days;
    hoursDisplay.value = hours;
    minutesDisplay.value = minutes;
    secondsDisplay.value  = seconds;
    
},1000);