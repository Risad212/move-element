const featured = document.querySelector(".featured");
let width = featured.offsetWidth;
let height = featured.offsetHeight;

featured.addEventListener("pointermove", (e) => {
  if (e.pressure > 0) {
    const x = e.pageX;
    const y = e.pageY;

    featured.style.top = y - height / 2 + "px";
    featured.style.left = x - width / 2 + "px";

    // you can also use transition instead position but u cant use flex in a parent element
    // featured.style.transform = "translate(" + (x - (width / 2)) + "px," + (y - (height / 2)) + "px)";
  }
});
