

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
