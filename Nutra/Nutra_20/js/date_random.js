(function($, document) {
	var pluses = /\+/g;
	function raw(s) {
		return s;
	}
	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	$.cookie = function(key, value, options) {
		// key and at least value given, set cookie...
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
			options = $.extend({}, $.cookie.defaults, options);

			if (value == null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || $.cookie.defaults || {};
		var decode = options.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}
		return null;
	};

	$.cookie.defaults = {};

})(jQuery, document);

(function( $ ) {
    var rStartMiliseconds = ($.cookie('randDate')) ? $.cookie('randDate') : new Date().getTime() - (29 * 24 * 60 * 60 * 1000);
    
    if (!$.cookie('randDate')) $.cookie('randDate', new Date().getTime() - (29 * 24 * 60 * 60 * 1000), {expires: 1});
    
    var rStart = new Date(parseInt(rStartMiliseconds));
    var startMonth = rStart.getMonth() + 1;
    
    var rusMonth;
    switch (startMonth) {
        case 1: rusMonth = 'января'; break;
        case 2: rusMonth = 'февраля'; break;
        case 3: rusMonth = 'марта'; break;
        case 4: rusMonth = 'апреля'; break;
        case 5: rusMonth = 'мая'; break;
        case 6: rusMonth = 'июня'; break;
        case 7: rusMonth = 'июля'; break;
        case 8: rusMonth = 'августа'; break;
        case 9: rusMonth = 'сентября'; break;
        case 10: rusMonth = 'октября'; break;
        case 11: rusMonth = 'ноября'; break;
        case 12: rusMonth = 'декабря'; break;
    }
    
    var methods = {
        init : function(options) {
            return this;
        },
        rstart : function() {
            return this.each(function(i) {
                $(this).html(rStart.getDate() + ' ' + rusMonth + ' ' + rStart.getFullYear());
            });
        },
        rdate : function() {
            return this.each(function(x) {
                var z = (x >= 16) ? 16 : x;
                var nextDate = new Date(rStart.getTime() + (z * (12 + z) * (60 + x) * 60 * (1000 + x)));
                if (x >= 31) nextDate = new Date(parseInt(rStartMiliseconds) + 2494600000 + x * 150000);
                ndate = nextDate.getDate();
                nmonth = nextDate.getMonth() + 1;
                nyear = nextDate.getFullYear();
                nhour = nextDate.getHours();
                if(ndate < 10) ndate = '0' + ndate;
                if(nmonth < 10) nmonth = '0' + nmonth;
                if(nhour < 10) nhour = '0' + nhour;
                nminutes = nextDate.getMinutes();
                if(nminutes < 10) nminutes = '0' + nminutes;
                nsec = nextDate.getSeconds();
                if(nsec < 10) nsec = '0'+nsec;
                $(this).html(ndate + '.' + nmonth + '.' + nyear + ' - ' + nhour + ':' + nminutes);
            });
        },
        ryear : function() {
            return this.each(function(i) {
                $(this).html(new Date().getFullYear());
            });
        }
    };
    
    $.fn.randDate = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call( arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Метод с именем ' +  method + ' не существует для jQuery.randDate');
        }
    };
})(jQuery);

$(function () {
    $('.rstart, .startdate').randDate('rstart');
    $('.rdate, .ypdate').randDate('rdate');
    $('.ryear, .nowyear').randDate('ryear');
});