const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");
 
 function getTime(){
    const xmasDay = new Date('2021-12-24:00:00:00+0900');
    const today = new Date();
    const seconds = 1000;
    const minutes = seconds*60 ;
    const hours = ;

}

function init(){
    getTime()
    setInterval(getTime,1000)
}
init();