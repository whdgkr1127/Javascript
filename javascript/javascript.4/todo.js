const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


let toDos = [];

function deleteToDo(event){
    const btn = event.target;//target은 어떤한것을 눌렀는지 알려준다.
    const li = btn.parentNode;//parentNode는 부모를 말한다.
    toDoList.removeChild(li);//removeChild()는 자식을 지우는 메서드이다.
    const cleanToDos = toDos.filter(function(toDo){//filter() 메서드는 조건에서 "true"를 반환하는 모든 요소를 유지합니다. 
        return toDo.id !== parseInt(li.id);//parseInt() 메서드는 String을 숫자로 바꿔주는 역할을 한다.
    });
    console.log(cleanToDos);
    toDos = cleanToDos // toDos는 이전것이고 cleanToDos는 현재 사용하는 것이기 때문에 바꿔주어야 한다. console.log를 하면 다른 값이 나오기 때문이다.
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button")
    const span = document.createElement("span")//HTML에 없는 값을 createElement() 메서드를 통해서 만들수 있다.
    const newId = toDos.length + 1
    delBtn.innerHTML = "❌"; //이모지 단축키 WINDOW + ; or .
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text; /*innerText와 innerHTML의 차이점은 innerHTML은 HTML요소를 사용했을때 안에 text값만 출력이 된다. ex) innerHTML = "<div>text</div> ->text " 
    innerText는 모든값을 출력한다. ex) innerHTML = "<div>text</div>" -><div>text</div>*/
    li.appendChild(span); // appendChild()는 자식이 될 값을 저장하는 메서드 이다. ex)li.appendChild(span) -> li(부모) span(자식)
    li.appendChild(delBtn);
    li.id = toDos.length + 1;
    toDoList.appendChild(li);
    const toDoObj = {
        text:text,
        id:newId
    }
    toDos.push(toDoObj);
    saveToDos()
}
function handleSubmit(event){
    event.preventDefault();
    const currentVaule = toDoInput.value;
    paintToDo(currentVaule);
    toDoInput.value = "";
}


    function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS)
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(todo){//foreach 메서드는 array 객체에서만 사용이 가능하며 function안에 아무글자나 적어도 상관없고 paintToDo앞에 같은 인자만 넣어주면 된다.
                paintToDo(todo.text);
            })


        }

    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit",handleSubmit)
    }
    init();