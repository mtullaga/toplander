(function() {
  
   var BASE_URL = 'https://www.foxtrade.eu/widgets/knbp/';
   var CONTENT_URL = BASE_URL;
   //var _foxtrade_param = 'EUR.NBP-USD.NBP-CHF.NBP-GBP.NBP';
   
   var id = uid();
   var div_id = 'foxtrade' + id;
   
   function uid() {
       var id = '_' + (new Date()).getTime();
       for(var i=0; i<8; i++) {
           id += '0123456789'.charAt(Math.floor(Math.random()*10));
	}
	
	return id;
   }
   	
   function requestContent() {
      var script = document.createElement('script');
      script.src = CONTENT_URL+"knbp-json.php?callback="+id;
      document.getElementsByTagName('head')[0].appendChild(script);
   }
   
   function stripAccents(str) {
      // define arrays
      var search  = Array('Ä', 'Ä', 'Ä', 'Ĺ', 'Ĺ', 'Ăł', 'Ĺ', 'Ĺź', 'Ĺş', 'Ä', 'Ä', 'Ä', 'Ĺ', 'Ĺ', 'Ă', 'Ĺ', 'Ĺť', 'Ĺš');
      var replace = Array('a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z', 'A', 'C', 'E', 'L', 'N', 'O', 'S', 'Z', 'Z');
		
      // replace polish national characters with latin ones
      for (var i = 0, len = search.length; i<len; i++) {
			
      	      // convert a string to a RegExp object	
      	      var pattern = search[i];
      	      re = new RegExp(pattern, "g");
			
      	      // do replace
      	      str = str.replace(re, replace[i]);
      }
		
      // replace all the character that are not letter or numbers to '-'
      str = str.replace(/[^a-zA-Z0-9]/g, '-');
		
      // replace many dashes with only one
      str = str.replace(/-{2,}/g, '-' ) // or str = str.replace(/--+/g, '-' );
		
      // convert the string to lowercase letters
      str = str.toLowerCase(); 
		
      return str;
   }
   
  function createCallback(div_id) {
     //if (!data) return;
     
     var param_array = _foxtrade_param.split('-');
     
     return function(data) {
         var txt = '';
         
         var div = document.getElementById(div_id);
         // style the div
         // div.style.backgroundColor = '#eee';
         // div.style.color = 'red';
         div.style.padding = '4px';
         div.style.marginBottom = '4px';
         div.style.marginTop = '4px';
         // div.style.marginLeft = '2px';
         // div.style.marginRight = '2px';
         // div.style.position = "relative";
	 // div.style.border = "thin solid #e5e5e5";

         for (var k=0; k<param_array.length; k++) {

             for (var i = 0; i < data.pozycja.length; i++) {
	         var obj = data.pozycja[i];

	         if (obj['kod_waluty'] == param_array[k].substring(0,3)) {

	            var change_color = '';
	            var zmiana_proc = parseFloat(obj['zmiana_proc'].replace(',', '.'));
	            if (zmiana_proc < 0) {
	            	    change_color = '#e60000';
	            } 
	            if (zmiana_proc > 0) {
	            	    change_color = '#1e913d';
	            }
	            if (zmiana_proc == 0) {
	            	    change_color = '#555555';
	            }
	         	 
	            // var link_dir = '';
	            var link_dir_str = obj['nazwa_waluty'] + '-' + obj['kod_waluty'];
	            var link_dir = stripAccents(link_dir_str) + '/';
	            var full_path = 'http://www.foxtrade.eu/notowania/nbp/kursy-srednie/' + link_dir;
	            var link_title = 'Kursy Ĺrednie NBP - ' + obj['nazwa_waluty'];
	            var link_color = '#555555';
	         	 
	            var _link = '<a href="' + full_path + '" title="' + link_title + '" ><span style="color:' + link_color + ';">' + obj['przelicznik'] + ' ' + obj['kod_waluty'] + '</span></a>'	
		 
	            txt += '<tr>' +
	         	 '<td style="font-size:92%; white-space: nowrap"><strong>' + _link + '</strong></td>' +
	         	 '<td style="font-size:92%; padding:0 5px; color:' + change_color + '"><strong>' + obj['kurs_sredni'] + '</strong></td>' +
	         	 '<td style="font-size:92%; padding:0 5px; text-align:right; padding:0 2px; color:' + change_color + '"><strong>' + obj['zmiana_proc'] + '%' + '</strong></td>' +
	         	 '<td style="font-size:82%; padding:0 0 0 10px; color:#777777">' + data.data_publikacji + '</td>' +
	         	 '</tr>';
		 }
	     }
	 }
	
	 // head
	var title = 'Kursy Ĺrednie NBP' + '  ';
	var data_publ = '';
	//var data_publ = data.data_publikacji;
	//
	var head = '<tr>' + 
		'<td colspan="4" style="font-size:106%; padding:5px 1px;"><strong>' + title + ' ' + data_publ + '</strong></td>' + 
		'</tr>';
	
	var table = '<table>' + head + txt + '</table>';
	var newHTML = table; 

	// assign new HTML into #div_id
	div.innerHTML = newHTML;  
	div.style.display = 'block'; // make element visible
     }
  }

window[id] = createCallback(div_id);
document.write("<div id='" + div_id + "' style='display: none'></div>");

setTimeout(requestContent, 10);
//requestContent();

})();


