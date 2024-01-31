
//Index
function fillMsisdn(msisdn){
   
    var elements =document.getElementsByClassName('input-text');
  	elements[0].value=msisdn;
	var btn=document.getElementById('request-btn');
	 btn.disabled =false;
	 btn.click();
	
}


//Verify
function fillOtp(otp){
	
   var elements =document.getElementsByClassName('input-text');
	elements[0].value=otp;
	var btn=document.getElementById('confirm-btn');
	 btn.disabled =false;
	 btn.click();
}

//First thanks
function clickFirstThanks(){
	
		var btn=document.getElementById('request-btnForFinalCharge');
	
		 btn.click();

  

}

//Global Variable
var state = 0;

// self executing function here
(function() {
    if(window.location.href.toLowerCase().indexOf("secondverify") > -1){
		state = 3;
    } 
    else if(window.location.href.toLowerCase().indexOf("verify") > -1){
        state = 1;
    }
	else if(window.location.href.toLowerCase().indexOf("secondthanks") > -1) {
        state = 4;
    } 
    else if(window.location.href.toLowerCase().indexOf("thanks") > -1){
        state = 2
    }
    else {
        state = 0
    }
	
	 if(window.location.href.toLowerCase().indexOf("secondverify") > -1  || window.location.href.toLowerCase().indexOf("verify") > -1){   
	 
	 
	   if(document.getElementById('DivErrorMsg')!=null)
        if(!document.getElementById('DivErrorMsg').innerHTML ===''){
          
		   state=6;
        }
        
		if(window.jQuery)
		{
        $(".final-countdown").countdown(deadline, { elapse: true }).on('update.countdown', function(event){
            var $this = $(this);
            if(event.elapsed){
                $this.countdown('stop');
                $this.html(event.strftime(""));
                pageLoadedAndroid(5);
				
            }
        });
		
}
else{
	
	setTimeout(function(){ 

		pageLoadedAndroid(5);

	}, 2*60000);

	
}
    
	 }
    pageLoadedAndroid(state);
   
})();


function pageLoadedAndroid(state) {
	
	if(typeof Android !== "undefined" && Android !== null) {
		Android.pageLoaded(state);
	} else {
		//alert("Not viewing in webview");
	}
	
	
}

