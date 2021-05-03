const weather = document.querySelector(".js-weather");


const API_KEY = "b7b89fca297237993eb0167e78b617a8"; //API는 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단이다.
const COORDS = "coords"


function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)//fetch() 안에 가져올 데이터를 넣어주면된다. 해당 URL에서 데이터를 요청한다.
    .then(function(response){
        return response.json(); //fetch()를 통해 데이터를 받아서 사용하기 위해서는 response.json()를 사용해서 스트림이 완료될때 까지 읽는다.
    })
    .then(function(json){// 데이터를 모두 읽은후에 출력할때 사용하는 코드이다.
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){//위치정보를 수락했을 경우 해당 함수가 실행됨.
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude:latitude,
        longitude:longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude)

}

function handleGeoError(){//수락하지 않았을 경우 아래와 같은 문구가 출력됨.
    console.log("cant access geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); 
    //Geolocation.getCurrentPosition() 메서드는 장치의 현재 위치를 제공하고 성공하면 첫번째  함수 실패하면 두번째 함수 실행
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS)
    if(loadedCoords == null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);//JSON.parse()는 문자열을 object로 바꿔준다.
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
        // console.log(parsedCoords)
    }
}

function init(){
    loadCoords()
}
init();