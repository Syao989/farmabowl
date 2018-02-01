$(function() {
  $('.hamburger').click(function () { //click hamburger to toggle sidebar
    showHideMobile();
  });
  
  $(".dimmer").click(function() { //clicking on the dim area outside the sidebar will exit sidebar
    showHideMobile();
  });
  
  $('li .icon-arrow').click(function () { //in sidebar mode, clicking on the menu icon arrows will show/hide the submenu
    $(this).parent().parent().toggleClass('showSubmenu');
  });
});

function showHideMobile() { //this function, when called, will effectively open up/close the sidemenu. Hence "toggle"
  $(".hamburger").toggleClass('active');
  $(".hamburger").parent('.menu').toggleClass('active');
  $('.dimmer').toggleClass('active');
  $('body').toggleClass('no-scrolling');
}

var waitForFinalEvent = (function () { //this ensures that the resize function below will not call every second
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

$(window).resize(function () { //intended effect: if the sidebar is open and the window is enlargened, then the sidebar will rightly close
    waitForFinalEvent(function(){
        var win = $(this);
        if (win.width() > 767) {
            $(".hamburger").removeClass('active');
            $(".hamburger").parent('.menu').removeClass('active');
            $('.dimmer').removeClass('active');
            $('body').removeClass('no-scrolling');
        }
    }, 100, "some unique string");
});