function ouibounce(config) {
  var config     = config || {},
    aggressive   = config.aggressive || false,
    sensitivity  = setDefault(config.sensitivity, 20),
    timer        = setDefault(config.timer, 1000),
    delay        = setDefault(config.delay, 0),
    callback     = config.callback || function() {},
    cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
    cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
    cookieName   = config.cookieName ? config.cookieName : 'viewedOuibounceModal',
    sitewide     = config.sitewide === true ? ';path=/' : '',
    _delayTimer  = null,
    noThanksUrl  = config.noThanksUrl || null,
    noThanksText = config.noThanksText || null,
    imgUrl       = config.imgUrl || null,
    htmlMarkup   = config.htmlMarkup || null,
    linkUrl = config.linkUrl,
    imgElem,
    _html        = document.documentElement;


  function addModal() {

      var modal = $("<div id='ouibounce-modal'>" + 
      "<div class='underlay'></div>" +
      "<div class='modal-cover'>" +
        "<div class='modal-body' style='cursor:pointer'>" +
        "</div>" +
      "</div>" +
    "</div>");


      $(modal).find(".modal-body").append(htmlMarkup);
      $(document).ready(function () {
          $("body").append(modal);
      });

      $('body').on('click', function () {
          $('#ouibounce-modal').hide();
      });

      $('#ouibounce-modal .modal-body').on('click', function () {
          if (linkUrl) {
            window.open(linkUrl, '_blank');
          }
          $('#ouibounce-modal').hide();
      });

      $('#ouibounce-modal .modal-footer').on('click', function () {
          if (noThanksUrl) {
            window.open(noThanksUrl, '_blank');
          }
          $('#ouibounce-modal').hide();
      });

      $('#ouibounce-modal .modal').on('click', function (e) {
          e.stopPropagation();
      });
  }
  
  $("a").click(disable);
  
  function setDefault(_property, _default) {
    return typeof _property === 'undefined' ? _default : _property;
  }

  function setDefaultCookieExpire(days) {
    // transform days to milliseconds
    var ms = days*24*60*60*1000;

    var date = new Date();
    date.setTime(date.getTime() + ms);

    return "; expires=" + date.toUTCString();
  }

  setTimeout(attachOuiBounce, timer);
  function attachOuiBounce() {
    _html.addEventListener('mouseleave', handleMouseleave);
    _html.addEventListener('mouseenter', handleMouseenter);
    _html.addEventListener('keydown', handleKeydown);
  }

  function handleMouseleave(e) {
    if (e.clientY > sensitivity || (checkCookieValue(cookieName, 'true') && !aggressive)) return;
    _delayTimer = setTimeout(_fireAndCallback, delay);
  }

  function handleMouseenter(e) {
    if (_delayTimer) {
      clearTimeout(_delayTimer);
      _delayTimer = null;
    }
  }

  var disableKeydown = false;
  function handleKeydown(e) {
    if (disableKeydown || checkCookieValue(cookieName, 'true') && !aggressive) return;
    else if(!e.metaKey || e.keyCode !== 76) return;

    disableKeydown = true;
    _delayTimer = setTimeout(_fireAndCallback, delay);
  }

  function checkCookieValue(cookieName, value) {
    return parseCookies()[cookieName] === value;
  }

  function parseCookies() {
    // cookies are separated by '; '
      var cookies = document.cookie.split('; ');
      

    var ret = {};
    for (var i = cookies.length - 1; i >= 0; i--) {
        var el = cookies[i].split('=');

      ret[el[0]] = el[1];
    }
    return ret;
  }

  function _fireAndCallback() {
    fire();
    callback();
  }

  function fire() {
      addModal();
      $("#ouibounce-modal").show();
      disable();
  }

  function disable(options) {
    var options = options || {};

    // you can pass a specific cookie expiration when using the OuiBounce API
    // ex: _ouiBounce.disable({ cookieExpire: 5 });
    if (typeof options.cookieExpire !== 'undefined') {
      cookieExpire = setDefaultCookieExpire();
    }

    // you can pass use sitewide cookies too
    // ex: _ouiBounce.disable({ cookieExpire: 5, sitewide: true });
    if (options.sitewide === true) {
      sitewide = ';path=/';
    }

    // you can pass a domain string when the cookie should be read subdomain-wise
    // ex: _ouiBounce.disable({ cookieDomain: '.example.com' });
    if (typeof options.cookieDomain !== 'undefined') {
      cookieDomain = ';domain=' + options.cookieDomain;
    }

    if (typeof options.cookieName !== 'undefined') {
      cookieName = options.cookieName;
    }

    document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;

    // remove listeners
    _html.removeEventListener('mouseleave', handleMouseleave);
    _html.removeEventListener('mouseenter', handleMouseenter);
    _html.removeEventListener('keydown', handleKeydown);
  }

  return {
    fire: fire,
    disable: disable
  };
}
