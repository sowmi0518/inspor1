function animation(id, start, end, duration) {
  let obj = document.getElementById(id);
  let current = start;
  let range = end - start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animation("num1-one", 0, 500, 1000);
animation("num1-two", 0, 99, 1000);
animation("num2-one", 0, 556, 1000);
animation("num2-two", 0, 967, 1000);

function navbar() {
  var nav = document.getElementById("nav-container");
  nav.style.left = "2px";
}
function closenavbar() {
  var nav = document.getElementById("nav-container");
  nav.style.left = "-100%";
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function list1(){
  var list = document.getElementById("list-1");
  var i_up=document.getElementById("i-up-1");
  var i_down=document.getElementById("i-down-1");
  let st_1=document.getElementById("h1-style-1")
  let sty_con_1=document.getElementById("style-1")
  list.style.display="block";
  i_up.style.display="none";
  i_down.style.display="block";
  i_down.style.color="white";
  sty_con_1.style.backgroundColor="blue";
  st_1.style.color="white";
}
function list_close_1(){
  var list = document.getElementById("list-1");
   var i_down=document.getElementById("i-down-1");
    var i_up=document.getElementById("i-up-1");
    let st_1=document.getElementById("h1-style-1")
    let sty_con_1=document.getElementById("style-1")
  list.style.display="none";
  i_up.style.display="block";
  i_down.style.display="none";
  i_down.style.color="";
  sty_con_1.style.backgroundColor="";
  st_1.style.color="blue";
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

function list2(){
  var list = document.getElementById("list-2");
  var i_up=document.getElementById("i-up-2");
  var i_down=document.getElementById("i-down-2");
  let st_1=document.getElementById("h1-style-2")
  let sty_con_1=document.getElementById("style-2")
  list.style.display="block";
  i_up.style.display="none";
  i_down.style.display="block";
  i_down.style.color="white";
  sty_con_1.style.backgroundColor="blue";
  st_1.style.color="white";
}
function list_close_2(){
  var list = document.getElementById("list-2");
  var i_up=document.getElementById("i-up-2");
  var i_down=document.getElementById("i-down-2");
  let st_1=document.getElementById("h1-style-2")
  let sty_con_1=document.getElementById("style-2")
  list.style.display="none";
  i_up.style.display="block";
  i_down.style.display="none";
  i_down.style.color="";
  sty_con_1.style.backgroundColor="";
  st_1.style.color="blue";
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function list3(){
  var list = document.getElementById("list-3");
  var i_up=document.getElementById("i-up-3");
  var i_down=document.getElementById("i-down-3");
  let st_1=document.getElementById("h1-style-3")
  let sty_con_1=document.getElementById("style-3")
  list.style.display="block";
  i_up.style.display="none";
  i_down.style.display="block";
  i_down.style.color="white";
  sty_con_1.style.backgroundColor="blue";
  st_1.style.color="white";
}
function list_close_3(){
  var list = document.getElementById("list-3");
  var i_up=document.getElementById("i-up-3");
  var i_down=document.getElementById("i-down-3");
  let st_1=document.getElementById("h1-style-3")
  let sty_con_1=document.getElementById("style-3")
  list.style.display="none";
  i_up.style.display="block";
  i_down.style.display="none";
  i_down.style.color="";
  sty_con_1.style.backgroundColor="";
  st_1.style.color="blue";
}
/*function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Start: 0, End: 1000, Duration: 2 seconds
  animateCounter("counter", 0, 1000, 2000);

function animation(id, start, end, duration) {
  let obj = document.getElementById(id);
  let current = start;
  let range = end - start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
window.onload = function () {
  animation("num1-one", 200, 500, 200);
};*/
