var mod = new Date(document.lastModified);
var y = mod.getFullYear()
var monthnames =
    ["January","February","March","April","May","June","July","August","September","October","November","December"];
var m = monthnames[mod.getMonth()];
var d = mod.getDate();
document.getElementById("datechanged").innerHTML = d + " " + m + " " + y;