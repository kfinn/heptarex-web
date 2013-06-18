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
  $('a.scroll').on('click', function() {
    var matched = this.href.match(/#.+/);
    if (matched) {
      $.scrollTo($(matched[0]), {duration: 400, easing: 'swing'});
      return false;
    }
    return true;
  });
});