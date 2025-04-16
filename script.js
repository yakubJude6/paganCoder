let myBtn = document.querySelector("button")

myBtn.addEventListener("click", function() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
})

})

function visible() {
  if(document.documentElement.scrollTop<2000) {
    myBtn.style.display = "none"
  } else {
      myBtn.style.display = "block"
  }
}


document.addEventListener("scroll", visible);
document.addEventListener("DOMContentLoaded", visible)