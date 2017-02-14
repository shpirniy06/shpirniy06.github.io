var omitformtags= new Array();

omitformtags[0] = "input";

omitformtags[1] = "select";

omitformtags[2] = "textarea";

omitformtags[3] = "radio";

omitformtags[4] = "checkbox";

function disableselect(e) {

var formObj = false;

for (var i = 0; i < omitformtags.length; i++){

if (e.target.tagName.toLowerCase() == omitformtags[i]){

formObj = true;

}

}

if (!formObj){

return false;

}

}

function reEnable(){

return true;

}

if (typeof document.onselectstart != "undefined"){

document.onselectstart = new Function ("return false");

}else{

document.onmousedown=disableselect;

document.onmouseup=reEnable;

}