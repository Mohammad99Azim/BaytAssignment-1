window.onscroll = function() {
  showScrollButton();
};

function showScrollButton() {
  var scrollButton = document.getElementById("scrollButton");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;  // For Safari
  document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
}




 