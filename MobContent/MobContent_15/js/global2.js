 
          function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

       $body = $("body");
         $(document).on({
            ajaxStart: function () { $body.addClass("loading"); },
            ajaxStop: function () { $body.removeClass("loading"); }
        });
         var idFlow;
         var pinlength;
        var refid = '';
        var plmn = '';
        var idoperator='';
        var otpparameter='';
        var vcodeparameters='';
        var phone ='';
        var lang = "";
        var IDBillingChannel='';
        var country='';
        var pincode='';
        var serviceid='';
        var smsbody='';
        var idcamp='';
        var src='';
        var cadid=' ';
        var acc='';
        var portalendpoint='';
        var servicename='';
        var typeoftraffic='Click';
        var endpoint='';
        var otpCounter=0;
        var otpcheck=false;
        var checkboxRequired;
        var enterCorrectPin;
        var invalidMSISDN;
        var invalidPin;
        var missingMSISDN;
        var Warning;
        var gpsadid="";
        var packageid="";
        var deviceid="";
        var os="";
        var model="";
        var InstallID=-1;
        var transID;
        var subkeyword;
        var shortcode;

    function firstload(){
 
      if(getParameterByName("gpsadid")!=undefined)
        gpsadid=getParameterByName("gpsadid");
            if(getParameterByName("packageid")!=undefined)
              packageid=getParameterByName("packageid");
                  if(getParameterByName("deviceid")!=undefined)
                    deviceid=getParameterByName("deviceid");
                        if(getParameterByName("os")!=undefined)
                          os=getParameterByName("os");
                              if(getParameterByName("model")!=undefined)
                                model=getParameterByName("model");
src=getParameterByName("src");
refid=getParameterByName("MobiBox_Ref_ID");
try {
idcamp=getParameterByName("IDCampaign");
}
catch(err) {
}
try {
cadid=getParameterByName("cadid1");
}
catch(err) {
}
 
if(refid==null){
refid=getParameterByName("IDCampaign");
typeoftraffic="Campaign";
}
country=$("#countryname").val();
serviceid=getParameterByName("serviceid");
 
lang=getParameterByName("lang");
$("#displayphoto").html('<img src="https://s3.amazonaws.com/wap.mobibox.mobi/build/img/'+serviceid+'.png" style="width:100px;text-align: center;margin-top:10px">');
    $("#countryname").val(getParameterByName("country"));
  getdisclaimers( );
}
 
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
var BChannels;
 function checkoptionalparamters(param){
if(getParameterByName(param)==undefined)
{
  if(param=="IDInstall")
  return -1;
else
    return "";
}
else
  return getParameterByName(param);

 }
    function callOTP() {

      otpCounter++;
       var currentTime = new Date().getTime();
 var jsTicks = currentTime * 10000;
 var netTicks = jsTicks + 621355968000000000;
          
            phone = $("#phone").val();
            
            
            var billingchannel = -1;
          var url= endpoint+"/API/WebSDK/PaymentActions/";
           if (phone.trim() != "") {
            $.ajax({
                type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", 
                url: url,
                data: JSON.stringify({
                       "country":$("#countryname").val(),
                       "serviceid":  serviceid  ,
                       "langCode":lang ,
                       "trafficSource":typeoftraffic,
                       "referrerString":refid,
                       "MSISDN":phone ,
                       "IDBillingChannel":-1 ,
                       "action":'otp' ,
                       "M":getParameterByName("M"),
                       "traffictype":"WapSDK",
                       "model":  model  ,
                       "os":os ,
                       "src":src,
                       "Acc":acc,
                       "cadid":cadid,
                       "UserAgent":  navigator.userAgent  ,
                       "transactionId":  uuidv4(),
                       "createdAt":  netTicks  ,
                       "gpsadid":gpsadid ,
                       "packageid":  packageid  ,
                       "deviceid":deviceid ,
                       "CGInternetMode":"WIFI",
                       "otpCounter":otpCounter ,
                         "InstallID": InstallID,
                            "OTPParams": otpparameter,
                             "VCODEParams":vcodeparameters,
                                    "Pub_ID" :  checkoptionalparamters("Pub_ID"),
                            "Aff_ID" : checkoptionalparamters("Aff_ID"),
                            "ClickID" : checkoptionalparamters("ClickID"),
                                "extra" : checkoptionalparamters("extra"),
                                    "extra1" : checkoptionalparamters("extra1"),
                                     "osVersion" : checkoptionalparamters("osVersion"),
                                    "IDInstall" : checkoptionalparamters("IDInstall")
                            
                             
                    }),
                            success: function (data) {
                              var d=JSON.stringify(data)
                                var response = JSON.parse(d);
                                if (response['Error'] == 0) {

                                        plmn = response['PLMN'];
                                        IDBillingChannel=response['IDBillingChannel'];
                                        phone=response['MSISDN'];
                                        idoperator=response['IDOperator'];
                                        otpparameter=response['clientAdditionalParams'];
                                        InstallID=response['InstallID'];

                                        if(response["RedirectCG"]){
                                        window.location.href =response["CGURL"];
                                        return;
                                      }
                                        if(response["IDChannelType"]==2)
                                        {
                                          subkeyword=response['Keyword'];
                                          shortcode=response['insc'];

                                          var ss="<button  onclick='callsms()' id='btn-1'  class='example_b'  style='margin-top: 10px;width: 200px'>"+subkeyword+" ZU "+shortcode+"</button>"
                                         $("#OTPdiv").html(ss);

 
                                      
                                        }
                                        else{
                                        vcodesetup( response['IDBillingChannel']);
                                      }
                                        }


                                        else{
                                        if (response['Error'] == 3) {
                                        plmn = response['PLMN'];
                                        IDBillingChannel=response['IDBillingChannel'];
                                        phone=response['MSISDN'];
                                        idoperator=response['IDOperator'];
                                        otpparameter=response['clientAdditionalParams'];
                                        InstallID=response['InstallID'];
                                        gotoportal();
                                        }else {
                                            $("#modalheader").html(Warning)
                              $("#showerror").html(response["Result"]);
                                $("#myModal2").modal();
                                        

                                }}
                            }
                        });
           }
           else{
            $("#modalheader").html(Warning)
             $("#showerror").html(invalidMSISDN);
             $("#myModal2").modal();
           }
    }
   function vcodesetup(IDBillingChannel){
     $("#OTPdiv").hide();
     $("#VCODEdiv").show();
          $("#displayphoto").html("")
     $("#displayta").html("")
     try{
              $("#mideldisc").html('');
              $("#head1").html('');
              $("#head2").html('');      
              var Vcodethemesarr;
              for (i = 0; i < BChannels.length; i++) {
              if(BChannels[i]['bChannelId']==IDBillingChannel)
               Vcodethemesarr=BChannels[i];
              } 
            try {
           pinlength=Vcodethemesarr['pinCodeLength'];   
             var vcodeheader=decodeURIComponent(Vcodethemesarr['VCodeTheme']['Disclaimers']['headerInfo']).replace(/\+/g, ' ');
            vcodeheader=vcodeheader.replace("MSISDN", phone);
            $("#head1").html(vcodeheader);
             }
            catch(err){
            console.log(err)
            }
            try {
            var vcodeheader=(decodeURIComponent(Vcodethemesarr['VCodeTheme']['Disclaimers']['middleInfo']).replace(/\+/g, ' '));
            $("#head2").html(vcodeheader);
            }
            catch(err){
            console.log(err)
            }
            try {
            var vcodeheader=(decodeURIComponent(Vcodethemesarr['VCodeTheme']['Disclaimers']['footerInfo']).replace(/\+/g, ' '));
            $("#mideldisc").html(vcodeheader);
            }
            catch(err){
            console.log(err)
            }
            }
            catch(err){
            console.log(err)
            }
            if(Vcodethemesarr['VCodeTheme']['WrongNumber']['Show']){
            $("#wrongnumber").html(decodeURIComponent('<a onClick="wrongnumber()" style="color:'+Vcodethemesarr['VCodeTheme']['WrongNumber']['Color']+'">'+Vcodethemesarr['VCodeTheme']['WrongNumber']['Text']+" </a>").replace(/\+/g, ' '));
            }
            $("#verifybtn").html(Vcodethemesarr['VCodeTheme']['Button']['Text']);  
            setcolor('backgroundColor',Vcodethemesarr['VCodeTheme']['Button']['Background'] ,'verifybtn');
            setcolor('color',Vcodethemesarr['VCodeTheme']['Button']['Color'],'verifybtn');  
            try{     
             var newcolor=Vcodethemesarr['VCodeTheme']['AskCodeAgain']['Color'];
            if(Vcodethemesarr['VCodeTheme']['AskCodeAgain']['Show']){
            $("#asknewpin").html('<a id="asknewpincont" onclick="resendpin()"  >'+decodeURIComponent(Vcodethemesarr['VCodeTheme']['AskCodeAgain']['Text']+'<br> <span id="time">00:00</span></a>').replace(/\+/g, ' '));
            setcolor('color','grey','asknewpincont');
            var fiveMinutes = Vcodethemesarr['VCodeTheme']['AskCodeAgain']['CountDown'] ,
            display = document.querySelector('#time');
            var Seconds = Vcodethemesarr['VCodeTheme']['AskCodeAgain']['CountDown'] ,
            display = document.querySelector('#time');
            display_c( Seconds);
            timer=Seconds;
                                        }  
            }
             catch(err){console.log(err)
            }
             
 }
 function resendpin(){
    var time=$("#time").html();
     if(time=='00:00'){
     $('#pincode').val();
       callOTP();

     }  
    
}
 var end = 0 // change this to stop the counter at a higher value
var refresh=1000; // Refresh rate in milli seconds
function display_c(start){
window.start = parseFloat(start);

if(window.start >= end ){
mytime=setTimeout('display_ct()',refresh)
}
else {

  setcolor('color','red','asknewpincont');
  setcolor('color','red','time');
  

}
}
function display_ct() {
// Calculate the number of days left
var days=Math.floor(window.start / 86400);

// After deducting the days calculate the number of hours left
var hours = Math.floor((window.start - (days * 86400 ))/3600);

// After days and hours , how many minutes are left 
var minutes = Math.floor((window.start - (days * 86400 ) - (hours *3600 ))/60);

// Finally how many seconds left after removing days, hours and minutes. 
var secs = Math.floor((window.start - (days * 86400 ) - (hours *3600 ) - (minutes*60)));
var newmin;
var newsec;
newmin=minutes;
newsec=secs
if(minutes<=9)
newmin='0'+minutes
if(secs<=9)
newsec='0'+secs

var x =    newmin +":"+ newsec  ;
console.log ( x);
$("#time").html(x)

window.start= window.start- 1;

tt=display_c(window.start);
}
  $("#exit").click(function(){
 var x=confirm('Are You sure want to exit:');
     if(x) {
     var myWindow = window.open("", "_self");
  myWindow.document.write("");
  setTimeout (function() {myWindow.close();},1000);
     }
  });
   function exit(){
 var x=confirm('Are You sure want to exit:');
     if(x) {
     var myWindow = window.open("", "_self");
  myWindow.document.write("");
  setTimeout (function() {myWindow.close();},1000);
     }
  }
     function wrongnumber(){

     var fullurl=replaceUrlParam(window.location.href,'country',$("#countryname").val()); 
      window.location.href= fullurl
    }
    function replaceUrlParam(url, paramName, paramValue)
    {
    if (paramValue == null) {
        paramValue = '';
    }
    var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
    if (url.search(pattern)>=0) {
        return url.replace(pattern,'$1' + paramValue + '$2');
    }
    url = url.replace(/[?#]$/,'');
    return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
    }
    function callVCODE(){

              pincode = $("#pincode").val();
            if (pincode.trim() != "") {
       			if(pinlength!=pincode.length)
{
   $("#modalheader").html(Warning)
             $("#showerror").html(enterCorrectPin);
             $("#myModal2").modal();
  return;
}
                var currentTime = new Date().getTime();
        var jsTicks = currentTime * 10000;
                var netTicks = jsTicks + 621355968000000000;
           
                var url= endpoint+"/API/WebSDK/PaymentActions/?";
                $.ajax({
                type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", 
                url: url,
                data: JSON.stringify({
                       "country":$("#countryname").val(),
                       "serviceid":  serviceid  ,
                       "langCode":lang ,
                       "trafficSource":typeoftraffic,
                       "referrerString":refid,
                       "MSISDN":phone ,
                       "IDBillingChannel":IDBillingChannel ,
                       "action":'vcode_charge' ,
                       "M":getParameterByName("M"),
                       "traffictype":"WapSDK",
                       "model":  model  ,
                       "os":os ,
                       "UserAgent":  navigator.userAgent  ,
                       "transactionId":  uuidv4(),
                       "createdAt":  netTicks  ,
                       "pincode":pincode,
                       "gpsadid":gpsadid ,
                       "packageid":  packageid  ,
                       "deviceid":deviceid ,
                       "CGInternetMode":"WIFI",
                       "otpCounter":otpCounter ,
                       "InstallID": InstallID,
                       "OTPParams": otpparameter,
                       "VCODEParams":vcodeparameters,
                                "Pub_ID" :  checkoptionalparamters("Pub_ID"),
                            "Aff_ID" : checkoptionalparamters("Aff_ID"),
                            "ClickID" : checkoptionalparamters("ClickID"),
                                "extra" : checkoptionalparamters("extra"),
                                    "extra1" : checkoptionalparamters("extra1"),
                                     "osVersion" : checkoptionalparamters("osVersion"),
                                    "IDInstall" : checkoptionalparamters("IDInstall")    
                    }),
                success: function (Data) {
                var d=JSON.stringify(Data)
                var response = JSON.parse(d);
                   
  
  
                if (response['Error'] == 0 ||response['Error'] == 3 ) {
                vcodeparameters=response['clientAdditionalParams'];
       setCookie("bChannelId",IDBillingChannel,600) 
       setCookie("MSISDN", phone,600) 
       setCookie("installId",InstallID ,600) 
       setCookie("OTPParams",otpparameter ,600) 
       setCookie("VCODEParams", vcodeparameters,600) ;
       setCookie(getParameterByName("country")+getParameterByName("serviceid"),"pre",600)
                if(response['isAlreadyConverted']=="true" || response['isAlreadyConverted']==true){
              
                setTimeout(function(){ 
                
                  gotoportal(); 
                }, 1000);}
                else{

                  sendconvpix();
                          setTimeout(function(){
                        
                              gotoportal();
                           }, 2000);}
                    }
                    else {
 
           $("#modalheader").html(Warning)
             $("#showerror").html(enterCorrectPin);
             $("#myModal2").modal();
            
                        $("#pincode").val("");

                    }

                }
            })
        }
        else
         {
           $("#modalheader").html(Warning)
             $("#showerror").html(enterCorrectPin);
             $("#myModal2").modal();
}
 }
         function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie =  (document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
     function gotoportal() {
      
          var pp= "contentredirection.html?src="+getParameterByName("src")+"&Acc="+getParameterByName("Acc")+"&cadid="+getParameterByName("cadid")+"&country="+country+"&service="+serviceid+"&idoperator="+idoperator+"&phonenumber="+phone+"&OTPParams="+otpparameter+"&VCODEParams="+vcodeparameters+"&ispremium=true&plmn="+plmn+"&InstallID="+InstallID+"&IDBillingChannel="+IDBillingChannel;
       setCookie("portal",pp,600);
  window.location.href =pp;
        } 
        function gotofreeportal() {
      
            window.location.href = "contentredirection.html?country="+country+"&service="+serviceid+"&idoperator="+idoperator+"&phonenumber="+phone+"&OTPParams="+otpparameter+"&VCODEParams="+vcodeparameters+"&ispremium=false&plmn="+plmn+"&InstallID=-1&IDBillingChannel="+IDBillingChannel;

        }
     var PrivacyPolicies;
     var termsandcondition;

  function sendconvpix(){
    if(getCookie("vcode")=="a"){
return;
    }
else{
     setCookie("vcode","a",600);

   if(getParameterByName('src')=='GA')
    gtag('event', 'conversion', {'send_to': getParameterByName('Acc')+'/'+getParameterByName('cadid')});
if(getParameterByName('src')=='SNAP')
  {

(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
'https://sc-static.net/scevent.min.js');

snaptr('init', getParameterByName("Acc"), {
'user_email': '__INSERT_USER_EMAIL__'
});

snaptr('track', 'PAGE_VIEW');
snaptr('track', 'SUBSCRIBE');
  }
  if(getParameterByName('src')=='FB')
  {
 
  var acc=getParameterByName("Acc");
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', acc);
  fbq('track', 'Subscribe');
 
   $("#loadtrack_fb").html('<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id='+acc+'&ev=Add Payment Info&noscript=1"/>')
    
  }
    if(src=='tiktok'){
    (function() {
    var ta = document.createElement('script'); 
    ta.type = 'text/javascript'; 
    ta.async = true;
    ta.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid='+getParameterByName("Acc");
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ta, s);
                })();
}
                    }

    
    }
    function calllookup(){
       endpoint="https://sdk.mymobibox.mobi"; 
       var mykey=getCookie(getParameterByName("country")+getParameterByName("serviceid"));
 
        if(mykey=="")
        return
       $.ajax({
           type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", 
           data:   JSON.stringify({
          "referringLink": "",
          "bChannelId":getCookie("bChannelId"),
          "MSISDN": getCookie("MSISDN"),
          "deviceId":"",
          "installId": getCookie("installId"),
          "OTPParams": getCookie("OTPParams"),
          "VCODEParams": getCookie("VCODEParams"),
          "appVersionCode":"",
          "packagename":"",
          "transactionId":uuidv4(),
          "Country":getParameterByName("country"),
          "IDService":getParameterByName("serviceid"),
          "cgTransID":""
                          }),
                     url: endpoint+"/API/InAppWAP/"+"Lookup/",
                    error: function (jqXHR, textStatus, errorThrown) {
                         return;
                    },
                     beforeSend: function() {
                    },
                    success: function (data) {
                var d=JSON.stringify(data)
                                var response = JSON.parse(d);
                                if (response['Error'] == 0){
                                    if (response['Status']['value'] == 0 || response['Status']['value'] == 1 ) {
                                      if(getCookie("portal")!=""){
                                        window.location.href =getCookie("portal");
                                      }
                                             
                                    }
                                    else{ 
 
       setCookie(getParameterByName("country")+getParameterByName("serviceid"),"",600)
                                 }
                                
                             }}})
    }
        function getdisclaimers( )
{
 
calllookup();

    country=$("#countryname").val();
  $("#displayta").html('')
  
  endpoint="https://sdk.mymobibox.mobi"; 
   $.ajax({
                    type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", 
                    data: JSON.stringify({
                      
                       
                       "IDService":   serviceid,
                       "Country": country ,
                       "UserAgent":  navigator.userAgent,
                       "langCode":getParameterByName("lang"),
                       "M":getParameterByName("M"),
                       "gclid":getParameterByName("gclid"),
                       "billingurl":window.location.href,
                       "trafficSource":typeoftraffic,
                       "referrerString":refid

                        
                    }),
                   // cache: false,
                     url: endpoint+"/API/WebSDK/Initiate/",
                    error: function (jqXHR, textStatus, errorThrown) {
                    },
                     beforeSend: function() {
                    },
                    success: function (data) {
                        var myJSON = JSON.stringify(data);
                        var result = jQuery.parseJSON(myJSON);
                        var GeneralSettings=result['GeneralSettings'];
                        BChannels=GeneralSettings['BChannels'];

                        var countryname=GeneralSettings['Country'];
                        var supportedCountries=GeneralSettings['supportedCountries'];
                        var all = new Array();
                        for(i=0;i<supportedCountries.length;i++)
                        {
                         all[i]=supportedCountries[i]['name'] ;
                        }
                        if(all.length==0){
                        $("#phone").intlTelInput({
                                initialCountry: countryname ,
                                allowDropdown:false
                                });
                                }
                                $("#phone").intlTelInput({
                                initialCountry: countryname,
                                onlyCountries: all
                            });
          
                       var Disclaimers=GeneralSettings['Disclaimers'];
                       try{
                          $("#mideldisc").html(decodeURIComponent(Disclaimers['footerInfo']).replace(/\+/g, ' '));
                       }
                        catch(ex){
                       }
                       try{     
                          $("#head1").html('<p style="color:white">'+decodeURIComponent(Disclaimers['headerInfo']).replace(/\+/g, ' ')+'</p>');
                          //$("#head1").html('<p style="color:white">Your safe download is ready. Please enter your mobile number to get your download PIN.   </p>');
                        }
                        catch(ex){ 
                        }
                        try{
                         $("#head2").html(decodeURIComponent(Disclaimers['middleInfo']).replace(/\+/g, ' '));
                        }
                        catch(ex){   
                        }
                        try{
                           setcolor('color',textBox['Color'],'phone'); 
                        }
                         catch(ex){   

                        }
                            try{
                       alllang=GeneralSettings['SupportedLanguages'];
                       console.log(alllang)

                       for(i=0;i<alllang.length;i++)
                        {
                          if(alllang[i]['Code']==lang.toLowerCase())
                        $("#langbar").append(new Option(alllang[i]['Name'], alllang[i]['Code']));
                        }
                        for(i=0;i<alllang.length;i++)
                        {
                          if(alllang[i]['Code']!=lang.toLowerCase())
                        $("#langbar").append(new Option(alllang[i]['Name'], alllang[i]['Code']));
                        }
 
                       }    
                       catch(err){ 
                       console.log(err)
                       } 

                        var SDKTexts;
                        try{ SDKTexts=GeneralSettings['SDKTexts'];}    catch(err){ }  
                        var theme;
                        try{ theme=GeneralSettings['Theme'];}    catch(err){ }  
                        var textBox=theme['TextBox'];
                        var button=  (theme['Button']);
                        var LimitedVersion=theme['LimitedVersion'];
                          termsandcondition=theme['TermsAndConditions'];
                          PrivacyPolicies=theme['PrivacyPolicies'];
                        var MSISDNCheckBox=theme['MSISDNCheckBox'];
                         try{
                        if(LimitedVersion['Show'])
                        $("#displayta").append("<a onclick='gotofreeportal()' style='color:"+LimitedVersion['Color']+" ; '>"+LimitedVersion['Text']+"</a>")}
                      catch(ex){

                      }
                      try{
                         if(PrivacyPolicies['Show'])
                        $("#displayta").append("<br/><a onClick='loadiframe(1)' style='color:"+PrivacyPolicies['Color']+"; text-decoration: underline;float:left;'>"+PrivacyPolicies['Text']+"</a>");
                        }
                      catch(ex){

                        }
                        try{
                        if(termsandcondition['Show'])
                        $("#displayta").append("<a  onClick='loadiframe(2)' style='color:"+termsandcondition['Color']+"; text-decoration: underline;float:right;'>"+termsandcondition['Text']+"</a>");
                        $("#btn-1").html(button['Text']); 
                        setcolor('backgroundColor',button['Background'],'btn-1');
                        setcolor('color',button['Color'],'btn-1');
                        }
                      catch(ex){
    $("#modalheader").html(Warning)
           $("#showerror").html("Country Not Supported");
           $("#myModal2").modal();
                        }
                        try{
                        if(MSISDNCheckBox['Show']){
                        otpcheck=true;
                        var condi="";
                        if(MSISDNCheckBox['RelatedURL']!=""){
                        $("#otpcheckbox").html(' <label   onClick="loadcheckbox()" style="color:'+MSISDNCheckBox['Color']+'"><input type="checkbox" style="width:15px;height:15px;margin-top: 12px;"  id="otpchecking" name=""> '+MSISDNCheckBox['Text']+'</label>')
                        }
                        else
                      $("#otpcheckbox").html(' <label  '+condi+'  style="color:'+MSISDNCheckBox['Color']+'"><input type="checkbox" style="width:15px;height:15px;margin-top: 12px;"  id="otpchecking" name=""> '+MSISDNCheckBox['Text']+'</label>')
                       document.getElementById("otpchecking").checked = MSISDNCheckBox['Checked'];
                      }}
                      catch(ex){   
                        }
                        
            try{ idFlow=GeneralSettings['idFlow'];
 
                      }    catch(err){ }
                      if(idFlow==4){

                
                                              $("#head1").html("");

                        $("#otpinput").hide();
 
                        document.getElementById( "btn-1" ).setAttribute( "onClick", "flowfour();" );


                      }
                           if(idFlow==2)
                      {$("#head2").html(decodeURIComponent(SDKTexts['goToContentHeader']).replace(/\+/g, ' ')+'<br /><br />');

                        transID=GeneralSettings['transID'];
                        if(BChannels.length>0){
                        shortcode=BChannels[0]['insc'];
                        IDBillingChannel=BChannels[0]['bChannelId'];
                        var keywords=BChannels[0]['keywords'];
                        subkeyword=keywords[0];}
                      $("#otpinput").html("");
                      $("#otpbutton").html("<button class='btn slow-pulse' id='otpbtn' onClick='callsms()' style='width:200px;min-height:50px;' >Continue</button>");
                         $("#otpbtn").html(button['Text']); 
                        setcolor('backgroundColor',button['Background'],'otpbtn');
                        setcolor('color',button['Color'],'otpbtn');
                      }
                  checkboxRequired=(SDKTexts['checkboxRequired'])
                  enterCorrectPin=(SDKTexts['enterCorrectPin'])
                  invalidMSISDN=(SDKTexts['invalidMSISDN'])
                  invalidPin=(SDKTexts['invalidPin'])
                  missingMSISDN=(SDKTexts['missingMSISDN'])
                  Warning=(SDKTexts['Warning']);
             setback()        
 }});
 
}

function flowfour(){
  var guid="";
  var s1='';
  var s2='';
  var s3='';
  if(getParameterByName('src')!=undefined)
    s1=getParameterByName('src')

  if(getParameterByName('Acc')!=undefined)
    s2=getParameterByName('Acc')

    if(getParameterByName('cadid')!=undefined)
    s3=getParameterByName('cadid')



    if(getCookie("guid")!=""){
    guid=  getCookie("guid");
  
    }
else{
       guid=  uuidv4();
    setCookie("guid",guid,600);
     }
    var url= "https://apis.mymobibox.mobi/API/WebSDK/2ClicksFlow/default.aspx";
     $.ajax({
                    type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", 
                    data: JSON.stringify({
                            "country": country,
  "serviceid": serviceid,
  "langCode": getParameterByName('lang'),
  "trafficSource": typeoftraffic,
  "referrerString": refid,
  "deviceid": guid,
  "UserAgent":  navigator.userAgent ,
  "src":s1,
  "Acc":s2,
  "cadid":s3
                  

                    }),
                   // cache: false,
                     url: url,
                    error: function (jqXHR, textStatus, errorThrown) {
                         
                    },
                     beforeSend: function() {
                    },
                    success: function (data) {
                var d=JSON.stringify(data)
                var response = JSON.parse(d);
                if (response['Error'] == 0 ) {
                  window.location.href=response['CGURL']
                    }
                    }});
}
 function changelang(){
   var url=replaceUrlParam(window.location.href,'lang',$("#langbar").val());
 window.location.href =url;
 }
function callsms(){
 var url= endpoint+"/API/WebSDK/SendEvent/Default.aspx/";
     $.ajax({
                    type: "POST", contentType: "application/json; charset=utf-8", dataType: "json", 
                    data: JSON.stringify({
                      "gpsAdid":'',
                       "deviceId": '',
                       "referringLink":  '',
                       "packageName":  ''  ,
                       "flowId":idFlow,
                       "transactionId":uuidv4(),
                       "eventId":132,
                       "platformId":2,
                         "flowName":'',
                        "keyword":subkeyword,
                      "shortcode":shortcode
                    }),
                   // cache: false,
                     url: url,
                    error: function (jqXHR, textStatus, errorThrown) {
                         
                    },
                     beforeSend: function() {
                    },
                    success: function (data) {
 
                    }});
 
 
   window.location.href  = "sms:"+shortcode+";?&body="+subkeyword;
document.getElementById( "otpbtn" ).setAttribute( "onClick", "gotoportal()" );


}
function loadiframe(a){
  var url="";
  if(a==1)
  {
     $("#modalheader").html("PrivacyPolicies")
    url=PrivacyPolicies['URL'];
  }
  if(a==2)
  {
       $("#modalheader").html("TermsAndConditions")
    url=termsandcondition['URL'];
  }
 
     $("#showerror").html("<iframe style='width:100%;min-height:500px;border:none' src='"+url+"'>");
           $("#myModal2").modal();
}
 function setcolor(type,color,id){

            if(type=='color')
            document.getElementById(id).style.color=color;
            if(type=='backgroundColor')
            document.getElementById(id).style.backgroundColor=color;    
            }
function beforeotp(){
   if(otpcheck) 
   {
    if($('#otpchecking').prop('checked'))
      callOTP();
      else{
           $("#modalheader").html(Warning)
           $("#showerror").html(checkboxRequired);
           $("#myModal2").modal();
         }
   }
   else 
 callOTP();
}   
 
 