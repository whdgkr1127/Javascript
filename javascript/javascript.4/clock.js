const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
    
    function getTime(){
        const date  = new Date();
        const minute = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minute < 10 ? `0${minute}`:minute}:${seconds < 10 ? `0${seconds}`:seconds }`;
   
        if(seconds >= 50){
            clockTitle.style.color = "red";
        }else{
            clockTitle.style.color = "black";
        }
        
    }

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();
console.dir(clockTitle);