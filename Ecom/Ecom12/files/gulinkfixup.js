function gu_qs_to_object(qs)
{var qs_object=[],kv=[],qs_temp=[];if(qs==""){return[];}else{qs_temp=qs.substring(1).split('&');}
for(var i=0;i<qs_temp.length;i++)
{kv=qs_temp[i].split('=');if(kv.length==2){qs_object[kv[0]]=kv[1];}else{qs_object[kv[0]]=kv[0];}}
return qs_object;}
function gu_parse_qs()
{var qs=gu_qs_to_object(window.location.search),params=[];if(qs["fbclid"]!=undefined){params["fbclid"]=qs["fbclid"];}if(qs["gclid"]!=undefined){params["gclid"]=qs["gclid"];}if(qs["ttclid"]!=undefined){params["ttclid"]=qs["ttclid"];}if(qs["wbraid"]!=undefined){params["wbraid"]=qs["wbraid"];}
return params;}
function gu_object_to_string(qs_object)
{var qs="";for(var i in qs_object)
{if(qs!=""){qs+="&";}
qs+=i+"="+qs_object[i];}
if(qs=="&"){qs="";}else{qs="?"+qs;}
return qs;}
function gu_dolinkfixup()
{var special_qs_params=gu_parse_qs(),link_qs_object=[];var links=document.links;for(var i=0;i<links.length;i++)
{if(links[i].protocol!="http:"&&links[i].protocol!="https:"&&links[i].protocol!="file:"){continue;}
link_qs_object=gu_qs_to_object(links[i].search);for(var k in special_qs_params)
{link_qs_object[k]=special_qs_params[k];}
links[i].search=gu_object_to_string(link_qs_object);}}
window.addEventListener('load',gu_dolinkfixup);