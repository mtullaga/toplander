//Executes the functions when everything is ready
window.addEvent('domready', function() {
	
	get_url_parameters('target_link');
	
	current_location();
	
	//Triggers a form submit for each element with the class form_submit
	$$('.form_submit').addEvent('click', function() {
		$('page_submit').submit();
		return false;
	});
	
	//initalize questions 
	var all_questions = $$('.questionblock');
	$('min_number').set('text', '1');
	$('max_number').set('text', all_questions.length)
	all_questions.each(function(element,index){
		//create question id's
		element.setProperty('id','question_'+index);
		if(index != 0) {
			element.fade('hide');
			element.addClass('hidden');
		}
		//clickevent answer
		$$('#question_'+index+' a').each(function(link){
			link.addEvent('click',function(){
				show_next_question(index);
			});
		});
	});
});

var show_next_question = function(index){
	var all_questions = $$('.questionblock');
	var pointer = '';
	if(index < all_questions.length - 1){
		fadeing($('question_'+index),$('question_'+(index+1)));
		fadeing($('question_headline'),$('question_headline'));
		$('min_number').set('text', index+2);
		
	}else{
		fadeing($('questions'),$('page_prozess'));
		setTimeout(function(){
			setTimeout(function(){
				fadeing($('prozess_status_1'),$('prozess_status_2'));
					setTimeout(function(){
						fadeing($('prozess_status_2'),$('prozess_status_3'));
						setTimeout(function(){
							window.location = $('target_link').get('href');
						},1800);
					},1800);
			},1800);
		},1800);
	}
}

var fadeing = function(object_out,object_in){
	object_in.fade('hide');
	object_out.fade('out');
	object_out.addClass('hidden');
	setTimeout(function(){
		object_in.removeClass('hidden');
		object_in.fade('in');
	},100);
}

var get_url_parameters = function(target_id){
	if(window.location.search && $(target_id)){
		var para = window.location.search;
		var href = $(target_id).href;
		if(window.location.search[0] == '?'){
			para = para.substring(1,para.lenght);
		}
		if(href.test(/\?$/) == true || href.test(/&$/) == true){
			href = href+para;
		}else if(href.test(/\/$/) == true){
			href = href+'?'+para;
		}else{
			href = href+'&'+para;
		}
		$(target_id).href = href;
	}
}
//gets the geo ip from the user and insiert it in each field with the class geoip
var current_location = function() {
	try{
		$$('.geoip').set('text',geoip_city());
	}catch(err){
	}
}