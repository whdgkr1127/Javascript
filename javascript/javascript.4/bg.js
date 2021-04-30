const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `js.basics/images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.prepend(image);
}


function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER); //Math.floor()는 소수점을 제외 출력한다. 0 <= Math.random() < 1
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();