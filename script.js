var cats = document.getElementsByClassName("cat");
var tables = document.getElementsByClassName("table");

for (var i = 0; i < cats.length; i++) {
  cats[i].addEventListener("click", function() {
    for (var j = 0; j < cats.length; j++) {
      cats[j].classList.remove("selected");
    }
    this.classList.add("selected");
  });
}

for (var i = 0; i < tables.length; i++) {
  tables[i].addEventListener("click", function() {
    for (var j = 0; j < tables.length; j++) {
      tables[j].classList.remove("selected");
    }
    this.classList.add("selected");
  });
}
