function cell(parent, value) {
  this.color = "red";
  this.parent = parent;
  this.value = value;
  this.column = htmlCreator("div", this.parent, "", "elem", this.value);
  this.setLeft = function (left) {
    this.column.style.left = left;
  };
  this.setbot = function (bot) {
    this.column.style.bottom = bot;
  };
  this.setHeight = function (height) {
    this.column.style.height = height;
  };
  this.setColor = function (clr) {
    this.column.style.backgroundColor = clr;
  };
}

var timer=0;
var counter =1000;
function main() {
  const parent = document.getElementsByClassName("con")[0];
  var arr = [];
  let x = [17, 6, 23, 20, 9, 2, 12, 28, 15, 4];

  for (let y = 0; y < 10; y++) {
    arr[y] = new cell(parent, x[y]);
    arr[y].setHeight((8 / 3) * arr[y].value + 1 + "vh");
    if (y == 0) {
      arr[y].setLeft(2 + "vw");
    } else if (y == 9) {
      arr[y].setLeft(74.5 + "vw");
    } else {
      arr[y].setLeft(`${y * (3.5 + 4.55555) + 2}vw`);
    }
  }

  bubbleSort(arr);
}
function bubbleSort(arr) {
  let ar = arr;
  for (let j = 0; j < 10 - 1; j++) {
    for (let y = 0; y < 10 - 1; y++) {
      if (ar[y].value > ar[y + 1].value) {
        
        ar[y].setColor("green");
        ar[y + 1].setColor("green");
        animateSort(y, ar);
        setTimeout(function(){
          changeOrder(y, ar);

        },timer)
        
       
        
        
        
      }
    
    }
    
  }
}


 function animateSort(y, arr) {
  setTimeout(function(){
    arr[y].setbot('20vh');
    arr[y+1].setbot('20vh');
  },timer)
  timer=timer+counter;
  
  setTimeout(function(){
    let temp=arr[y].column.style.left;
  arr[y].setLeft(arr[y + 1].column.style.left);

  arr[y+1].setLeft(temp);
  },timer)
  timer=timer+counter;
  
  setTimeout(function(){
    arr[y].setbot("10vh");
    arr[y + 1].setbot("10vh");
    ar[y].setColor("red");
    ar[y + 1].setColor("red");
   
  },timer)
  timer=timer+counter;

  
 
  
}

function changeOrder(y, arr) {
  
    let temp = arr[y];
    arr[y] = arr[y + 1];
    arr[y + 1] = temp;
 
 
}
function htmlCreator(tag, parent, id = "", clss = "", inHTML = "") {
  var t = document.createElement(tag);
  parent.appendChild(t);
  t.id = id;
  t.className = clss;
  t.innerHTML = inHTML;

  return t;
}
main();
