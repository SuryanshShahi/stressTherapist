const changeBackground = () => {
  var x = document.getElementById("navbar");
  if (window.scrollY >= 100) {
    if (x.classList == "active") {
      x.classList.remove("active");
    } else {
      x.classList.add("active");
    }
  } else {
    x.classList.remove("active");
  }
};
window.addEventListener("scroll", changeBackground);
