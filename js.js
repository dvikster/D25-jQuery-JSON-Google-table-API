$(document).ready(function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1QnPYekM-2yixobzL-Dw6y5HqaqgPJ_sO6HDU2weUxQw/od6/public/values?alt=json", function (data) {
        console.log(data);
    var m = data.feed.entry;
    // console.log(m.gsx$cost['$t']);
    console.log(m);
    for(var i=0; i< m.length; i++){
        console.log(m[i].gsx$id['$t']);
        console.log(m[i].gsx$name['$t']);
        console.log(m[i].gsx$coast['$t']);
    }

    });
});
// https://docs.google.com/spreadsheets/d/1QnPYekM-2yixobzL-Dw6y5HqaqgPJ_sO6HDU2weUxQw/edit?usp=sharing

