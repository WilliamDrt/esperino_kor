

window.onscroll = function() {handleScroll()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function handleScroll() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
