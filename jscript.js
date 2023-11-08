

// window.onscroll = function() {handleScroll()};

// let header = document.getElementById("myHeader");
// let sticky = header.offsetTop;

// function handleScroll() {
//   if (window.scrollY > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

// function todayIs() {
//   const d = new Date();
//   return d.getDay();
// }

function colorToday() {
  const d = new Date();
  let day = d.getDay();
  let dd = "";  
  // alert(day);
  switch(day){
    case 1:
      dd = "day0";
      break;
    case 2:
      dd = "day1";
      break;
    case 3:
      dd = "day2";
      break;
    case 4:
      dd = "day3";
    break;
    case 5:
      dd = "day4";
     break;
  }
  document.getElementById(dd).style["color"] = "blue";
  document.getElementById(dd).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}


