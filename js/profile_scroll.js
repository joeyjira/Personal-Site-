// Thought Credit GeeWon Lee

let joey = document.querySelector(".my-image")

var last_known_scroll_position = 0;
var ticking = false;
var initial = -80;
var direction = 0;

function doSomething(scroll_pos, direction) {
  // do something with the scroll position
  if (scroll_pos > 125)
  {
    initial = scroll_pos - 125 - 80;
    position = initial + "px";
    joey.style.top = position;
  }
}

window.addEventListener('scroll', function(e) {
  let current_position = window.scrollY;
  direction = current_position - last_known_scroll_position;
  last_known_scroll_position = current_position;

  if (!ticking) {

    window.requestAnimationFrame(() => {
      doSomething(last_known_scroll_position, direction);
      ticking = false;
    });

    ticking = true;

  }

});
