
/*
for (let j = 0; j < 10; j++) {
  x[j] = Math.floor(Math.random() * 29) + 2;
 console.log(`${Math.floor(Math.random() * 29) + 2},`)
}
*/
var parent = document.getElementsByClassName("con")[0];

var arr = [];

for (let y = 0; y < 10; y++) {
  arr[y] = htmlCreator("div", parent, "", "elem", x[y]);
  if (y == 0) {
    arr[y].style.left = 2 + "vw";
    arr[y].style.height = (8 / 3) * x[y] + 1 + "vh";
  } else if (y == x.length - 1) {
    arr[y].style.left = 74.5 + "vw";
    arr[y].style.height = (8 / 3) * x[y] + 1 + "vh";
  } else {
    arr[y].style.left = `${y * (3.5 + 4.55555) + 2}vw`;
    arr[y].style.height = (8 / 3) * x[y] + 1 + "vh";
  }
}

let bubbleSort = () => {
  let len = 10;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (x[j] > x[j + 1]) {
        arr[j].style.backgroundColor = "green";
        arr[j + 1].style.backgroundColor = "green";
      }
    }
  }
};

bubbleSort();

function htmlCreator(tag, parent, id = "", clss = "", inHTML = "") {
  var t = document.createElement(tag);
  parent.appendChild(t);
  t.id = id;
  t.className = clss;
  t.innerHTML = inHTML;

  return t;
}

