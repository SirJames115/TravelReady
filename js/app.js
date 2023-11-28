const dateElement = document.getElementById("date");
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");
const submit = document.querySelector(".submit");

// Classes
const CHECK = 'fa-check-circle'
const UNCHECK = 'fa-circle-thin'
const LINE_THROUGH = 'LineThough'

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

  const DONE = done ? CHECK : UNCHECK
  const LINE = done ? LINE_THROUGH : ""

  const note = `
  <li class="item">
  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
  <p class="text ${DONE}">${item}</p>
  <i class="fa fa-trash-o de" job="delete" id="${id}></i>
  </li>
  `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, note);
}

let = LIST = [], id = 0;

submit.addEventListener("click", (e) => {
  const item = input.value;
  if (item) {
    addTripItem(item, id, false, false);
    
    LIST.push({
      name:item, id:id, done: false, trash:false
    })
  } else {
    alert(`You cant submit an empty field`);
  }
  id++
  input.value = "";
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const item = input.value;

    if(item){
      addTripItem(item, id, false, false);

      LIST.push({
        name:item, id:id, done: false, trash:false
      })
    }

    id++;
    input.value = "";
  }
});
