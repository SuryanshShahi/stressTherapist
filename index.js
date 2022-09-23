const changeBackground = () => {
  var x = document.getElementById("navbar");
  var y = document.getElementById("topnav");
  var z = document.getElementById("header");
  if (window.scrollY >= 100) {

    if (x.classList == "active") {
      x.classList.remove("active");
    } else {
      x.classList.add("active");
    }
    y.style.display = "none";
    z.style.backgroundColor = "transparent";
  } else {
    x.classList.remove("active");
    y.style.display = "block";
    z.style.backgroundColor = "white";
  }
};
window.addEventListener("scroll", changeBackground);
