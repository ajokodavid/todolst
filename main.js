// const input =  document.querySelector('#inputer');
// const list = document.querySelector('#lister');
// const btn = document.querySelector('#btnx');
// const parag = document.querySelector('#para');

// btn.addEventListener('click', (f) => {
//     f.preventDefault()
    
//     if(input.value === '') {
//        parag.innerHTML = 'Put In Something'
//     setTimeout(() => {parag.remove()}, 2000)
//     } 

//    else{
//        const li = document.createElement('li')
//        li.classList.add('list-group-item')
//        li.appendChild(document.createTextNode(`${input.value}`))
//        list.appendChild(li)
//    }

// } )

const inputBoxx = document.querySelector('#inputer');
const addBtn = document.querySelector('#btnx');
const toDoList = document.querySelector('#lister');
const deleteAllBtn = document.querySelector('#resp .footer');



inputBoxx.onkeyup = () => {
    let userData = inputBoxx.value
    if(userData.trim() != '') {
        addBtn.classList.add('active');
    }
    else{
        addBtn.classList.remove('active');
    }
}

displayTasks();
addBtn.onclick = () => {
    let userData = inputBoxx.value;
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null) {
        listArr = [];
    } else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData)
    localStorage.setItem('New Todo', JSON.stringify(listArr))
    displayTasks();
}

function displayTasks() {
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null) {
        listArr = [];
    } else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector('.pendingNum');
    pendingNum.textContent = listArr.length;
    if(listArr.length > 0) {
        deleteAllBtn.classList.add('active')
    } else {
        deleteAllBtn.classList.remove('active')
    }
    let newLiTag = '';
    listArr.forEach( (value, index, array) => {
        newLiTag = newLiTag + `<li class="list-group-item" id="buy">${value}<span class="spam" onclick="removeTasks(${index})"><button class="btn btn-danger btn-sm">-</button></span></li><br>`;
    } );
    toDoList.innerHTML = newLiTag;
    inputBoxx.value = '';
}

function removeTasks(index) {
    let getLocalStorage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1)
    localStorage.setItem('New Todo', JSON.stringify(listArr))
    displayTasks();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem('New Todo', JSON.stringify(listArr))
    displayTasks();
}
