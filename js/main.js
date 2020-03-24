document.addEventListener("DOMContentLoaded", function() {
  setVh();
  collapseNav();
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1
  }).mount();
});

window.onscroll = function() {
  collapseNav();
};

function collapseNav() {
  var header = document.getElementById("main-header");
  if (window.pageYOffset > 10) {
    header.classList.add("collapse");
  } else {
    header.classList.remove("collapse");
  }
}

window.addEventListener("resize", () => {
  setVh();
});

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
