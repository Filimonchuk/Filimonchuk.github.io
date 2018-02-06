
// When the user scrolls the page, execute addSticky 
window.onscroll = function() {
    addSticky();
};

// Get the header
var header = document.getElementById("varHeader");// "var" for old android versions

// Get the offset position of the navbar
var sticky = header.offsetTop;// "var" for old android versions

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}