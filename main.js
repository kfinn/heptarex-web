jQuery(function($) {
  var iOS = !!(navigator.userAgent.match(/(iPad|iPhone|iPod)/g));
  if (iOS) {
    function fetch2xImage(index, src) {
      var matched = src.match(/\.?[^.]+/g);
      if (matched) {
        return matched[0] + '@2x' + matched[1];
      }
      return src;
    }
    $('img.2x').attr('src', fetch2xImage);
  }
  var oldWindowHeight = $(window).height();
  $(window).resize(function() {
    var newWindowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var sectionCount = scrollPosition / oldWindowHeight;
    var heightDifference = oldWindowHeight - newWindowHeight;
    var newScrollPosition = scrollPosition - sectionCount * heightDifference;
    $(window).scrollTop(newScrollPosition);
    oldWindowHeight = newWindowHeight;
  });
  var inFlight;
  $('a.scroll').on('click', function() {
    var matched = this.href.match(/#.+/);
    if (matched) {
      if (inFlight) {
        window.clearTimeout(inFlight);
      }
      $.scrollTo($(matched[0]), {duration: 400, easing: 'swing'});
      inFlight = window.setTimeout(function() {
        window.location.hash = matched[0].slice(1);
      }, 401);
      return false;
    }
    return true;
  });
  var imageSelected = false;
  var galleryView = $('#go');
  var galleryFocus = $('img', galleryView);
  function fetchFullImage(src) {
    var matched = src.match(/\.?[^.]+/g);
    if (matched) {
      return matched[0] + '_f' + matched[1];
    }
    return src;
  }
  $('.gallery img').on('click', function() {
    galleryFocus.attr('src', fetchFullImage(this.src));
    galleryView.addClass('visible');
    return false;
  });
  galleryView.click(function() {
    galleryView.removeClass('visible');
    return false;
  })
});