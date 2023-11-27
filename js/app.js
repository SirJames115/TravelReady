const dateElement = document.getElementById("date");
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

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
  const position = "beforeend";
  const note = `
    <li class="item">
                    <i class="fa fa-circle-thin co" job="complete" id="${id}"></i>
                    <p class="text">${item}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}></i>
                </li>
    `;
    list.insertAdjacentHTML(position, note)
}
addTripItem('PC')