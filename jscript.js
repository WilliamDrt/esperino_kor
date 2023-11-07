

window.onscroll = function() {handleScroll()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function handleScroll() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function todayIs() {
  const d = new Date();
  return d.getDay();
}

function colorToday() {
  const d = new Date();
  let day = d.getDay();
  // alert(day);
  switch(day){
    case 1:
       document.getElementById("day0").style["color"] = "blue";
      break
    case 2:
        document.getElementById("day1").style["color"] = "blue";
        document.getElementById("day1").scrollIntoView(); 
      break
    case 3:
       document.getElementById("day2").style["color"] = "blue";
      break
    case 4:
       document.getElementById("day3").style["color"] = "blue";
    break
    case 5:
      document.getElementById("day4").style["color"] = "blue";
      break 
    default :
    alert(Date()); // display current date
  }
  

}
