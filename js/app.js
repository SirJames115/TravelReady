const dateElement = document.getElementById("date");
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
const submit = document.querySelector(".submit");

// Classes
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show the current date
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add trip item to the list
function addTripItem(item, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const note = `
  <li class="item">
  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
  <p class="text ${LINE}" job="text">${item}</p>
  <i class="fa fa-trash de" job="delete" id=${id}></i>
  </li>
  `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, note);
}

(let = LIST = []), (id = 0);

// Get item from local storage
let data = localStorage.getItem("TRIPLIST");

if(data){
  try {
    LIST = JSON.parse(data)
    id = LIST.length
    loadList(LIST)
  } catch (error) {
    console.error('Error parsing JSON: ', error)
  }
}else{
  LIST =[]
  id = 0
}

function loadList(array){
  array.forEach(element => {
    addTripItem(element.name, element.id, element.done, element.trash)
  });
}

clear.addEventListener('click',()=>{
  localStorage.clear()
  window.location.reload()
})

submit.addEventListener("click", (e) => {
  const item = input.value;
  if (item) {
    addTripItem(item, id, false, false);

    LIST.push({
      name: item,
      id: id,
      done: false,
      trash: false,
    });
  } else {
    alert(`You can't submit an empty field`);
  }
  // Add item to the local storage
  localStorage.setItem("TRIPLIST", JSON.stringify(LIST));
  id++;
  input.value = "";
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const item = input.value;

    if (item) {
      addTripItem(item, id, false, false);

      LIST.push({
        name: item,
        id: id,
        done: false,
        trash: false,
      });
    }
    // Add item to the local storage
    localStorage.setItem("TRIPLIST", JSON.stringify(LIST));
    id++;
    input.value = "";
  }
});

function completeItem(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeItem(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
  // console.log(LIST[element.id].trash = true)
}

list.addEventListener("click", (e) => {
  element = e.target;
  elementJob = element.attributes.job.value;

  console.log(elementJob);

  if (elementJob == "complete") {
    completeItem(element);
  } else if (elementJob == "delete") {
    removeItem(element);
  }
  // Add item to the local storage
  localStorage.setItem("TRIPLIST", JSON.stringify(LIST));
});
