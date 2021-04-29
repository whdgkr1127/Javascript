const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button")
    const span = document.createElement("span")//HTML에 없는 값을 createElement() 메서드를 통해서 만들수 있다.
    const newId = toDos.length + 1
    delBtn.innerHTML = "❌"; //이모지 단축키 WINDOW + ; or .
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
            parsedToDos.forEach(function(todo){//foreach 메서드는 function안에 아무글자나 적어도 상관없고 paintToDo앞에 같은 인자만 넣어주면 된다.
                console.log(todo);
                paintToDo(todo.text);
            })


        }

    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit",handleSubmit)
    }
    init();