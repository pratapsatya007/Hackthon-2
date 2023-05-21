let hrs = document.getElementById("hr");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");
let hrs1 = document.getElementById("hr1");
let mins1 = document.getElementById("min1");
let secs1 = document.getElementById("sec1");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
secs.innerText = 0;
mins.innerText = 0;
hrs.innerText = 0;
let i = 0;
let j = 0;
let k = 0;
secs1.innerText = 0;
mins1.innerText = 0;
hrs1.innerText = 0;
let x = 0;
let y = 0;
let z = 0;
var b = 0;
let v;
function reset() {
  clearInterval(v);
  secs.innerText = 0;
  mins.innerText = 0;
  hrs.innerText = 0;
  secs1.innerText = 0;
  mins1.innerText = 0;
  hrs1.innerText = 0;
  i = 0;
  j = 0;
  k = 0;
  x = 0;
  y = 0;
  z = 0;
  b = 0;
  clearInterval(v);
}
function timer() {
  i++;
  if (i > 9) {
    i = 0;
    x++;
    if (x === 6) {
      x = 0;
      j++;
      if (j === 9) {
        j = 0;
        y++;
        if (y === 6) {
          y = 0;
          k++;
          if (k === 9) {
            k = 0;
            z++;
          }
        }
      }
    }
  }

  secs.innerText = i;
  secs1.innerText = x;
  mins.innerText = j;
  mins1.innerText = y;
  hrs.innerText = k;
  hrs1.innerText = z;
}
function call() {
  v = setInterval(timer, 1000);
}

function clear() {
  clearInterval(v);
}
stopbtn.addEventListener("onclick", clear);
//todo list:
let tasks = document.getElementById("task");
let Add = document.getElementById("add");
let head = document.getElementById("head");
let tasklist = document.getElementById("tasklist");
let taskw = document.getElementById("taskw");
let right = document.getElementById("right");
let wrong = document.getElementById("wrong");
let a = 0;
let n = 10;
let e;
let arr = [""];
function todo() {
  arr[a] = tasks.value;
  tasklist.innerText = "";
  for (let i = a; i <= a && i >= 0; i--) {
    tasklist.innerText += arr[i] + "\n";
  }
  head.innerText = "List of task";

  a++;
  tasks.value = "";
}
//music board:
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");
let m5 = document.getElementById("m5");
let btns = document.getElementsByClassName("keysty");
function playbtn1() {
  m1.play();
}
function playbtn2() {
  m2.play();
}
function playbtn3() {
  m3.play();
}
function playbtn4() {
  m4.play();
}
function playbtn5() {
  m5.play();
}
