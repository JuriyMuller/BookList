const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputISB = document.querySelector("#isb");

const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const form = document.querySelector("#form");
const table = document.querySelector(".table");
const container = document.querySelector(".container");

/* Book Constructor */
function Book(title, author, isb) {
  this.title = inputTitle.value;
  this.author = inputAuthor.value;
  this.isb = inputISB.value;
}

/* UI Constructor  */
function UI() {}

/* UI Prototype Methods */
UI.prototype.addBookToList = function (book) {
  Book.call(this);
  const tr = document.createElement("tr");
  tr.className = "tr";
  const thTitile = document.createElement("th");
  const thAuthor = document.createElement("th");
  const thISB = document.createElement("th");

  output.appendChild(tr);
  tr.appendChild(thTitile);
  tr.appendChild(thAuthor);
  tr.appendChild(thISB);
  thISB.innerText = this.isb;
  thAuthor.innerText = this.author;
  thTitile.innerText = this.title;
};
// Clear fields
UI.prototype.clearFields = function () {
  output.addEventListener("click", (e) => {
    if (e.target.closest(".tr")) {
      e.target.closest(".tr").remove();
    }
  });
};

btn.addEventListener("click", (e) => {
  if (
    inputAuthor.value === "" ||
    inputISB.value === "" ||
    inputTitle.value === ""
  ) {
    let error = document.createElement("div");
    error.className = "border p-3";

    error.style.width = "100%";
    error.style.color = "#B33030";
    error.style.backgroundColor = "#FFB5B5";

    error.innerText = "Заполните все поля!";
    container.appendChild(error);
    table.style.display = "none";
  }
  const result = new UI();

  result.addBookToList();
  result.clearFields();

  e.preventDefault();
});
