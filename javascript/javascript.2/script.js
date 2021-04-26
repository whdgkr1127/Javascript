
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

h1.style.color = "black"
h1.innerHTML = "Hello!!!"

function handleResize(){
    const width = window.innerWidth;

    if(width >= 100 && width < 500 ){
        body.style.backgroundColor = "red";
    }else if(width >= 500 && width < 900 ){
        body.style.backgroundColor= "blue";
    }else{
        body.style.backgroundColor= "yellow"
    }
}


function init(){
    
    window.addEventListener("resize",handleResize);
}
init();
    
console.dir(window);