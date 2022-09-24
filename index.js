myFunction = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1000);
};

const back = () => {
  window.scroll(0, 0);
};

const changeBackground = () => {
  var x = document.getElementById("navbar");
  var y = document.getElementById("backtotop");
  if (window.scrollY >= 100) {
    if (x.classList == "active") {
      x.classList.remove("active");
      y.style.display = "none";
    } else {
      x.classList.add("active");
      y.style.display = "block";
    }
  } else {
    x.classList.remove("active");
    y.style.display = "none";
  }
};
window.addEventListener("scroll", changeBackground);
