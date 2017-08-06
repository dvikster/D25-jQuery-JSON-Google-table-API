$(document).ready(function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1QnPYekM-2yixobzL-Dw6y5HqaqgPJ_sO6HDU2weUxQw/od6/public/values?alt=json", function (data) {
            console.log(data);
    var m = data.feed.entry;
        // document.getElementById('chart_1').innerHTML= m;
    console.log('m', m);
    var arrayData=[];
        var obj = m[0];
        var dataObj = Object.keys(obj);
        // document.getElementById('chart_1').innerHTML= dataObj;
        dataObj = ''+Object.keys(obj)+'';
        var dO= dataObj.split(/\s*,\s*/);

        console.log('dO', dO);
        var arrayData1=[];
        var arrayData2=[];
        document.getElementById('chart_1').innerHTML= dO;
        for(var a=0; a< dO.length; a++) {
            if (dO[a].match(/gsx\$/g)) {
                arrayData2.push(dO[a]);
            }
        };
        for(var a=0; a< dO.length; a++) {
            if (dO[a].match(/gsx\$/g)) {

                dO[a] = dO[a].replace(/gsx\$/g, "");
                arrayData1.push(dO[a]);
            }
        };

        document.getElementById('chart_1').innerHTML= arrayData1;

        console.log('arrayData2', arrayData2);
        console.log('arrayData1', arrayData1);

        arrayData.push(
            arrayData1
        );

        //
        // for(var i=0; i< arrayData2.length; i++){
        //     console.log(arrayData2[i]);
        //     a = arrayData2[i];
        //     // console.log(m[i].arrayData1[i]['$t']);
        //     // console.log(m[i].arrayData1[i]['$t']);
        //     // console.log(m[i].arrayData1[i]['$t']);
        //     for(var b=0; b < m.length; b++) {
        //         // console.log(m[b].a['$t'])
        //         // arrayData.push(
        //         //     m[b].a['$t']
        //         // );
        //     }
        // }
        $(m).each(function(){
            console.log('2', this.gsx$id555.$t);
            console.log('2', this.gsx$name.$t);
            console.log('2', this.gsx$coast.$t);

        });
        arrayData3=[];
        for(var a=0; a< m.length; a++){
            // console.log(m[a].gsx$id555['$t']);
            // console.log(m[a].gsx$name['$t']);
            // console.log(m[a].gsx$coast['$t']);

                for(var b=0; b <arrayData2.length; b++) {
                    // console.log('test gsx$id', m[a][arrayData2[0]]['$t']);
                    // console.log('test gsx$name', m[a][arrayData2[1]]['$t']);
                    // console.log('test gsx$coast', m[a][arrayData2[2]]['$t']);

                    console.log('test', b, m[a][arrayData2[b]]['$t']);
                    // console.log(m[a].gsx$name['$t']);
                    // console.log(m[a].gsx$coast['$t']);

                    // console.log(m[a].arrayData2[0]['$t']);
                    // console.log(b, arrayData2[b]);
                    // console.log(b, arrayData2[0]);
                    // arrayData3.push(
                    //     m[a][arrayData2[b]]['$t']
                    // );

                    // console.log(m[a].arrayData2[b]['$t'])
                    // arrayData.push(
                    //     m[b].a['$t']
                    // );
                    // for(var a=0; a< m.length; a++){
                        arrayData3.push(
                            m[a][arrayData2[b]]['$t']
                        );
                    // }


                }

        }
        arrayData.push(
            arrayData3
        );

        function chunkArray(arr, chunk) {
            var i, j, tmp = [];
            for (i = 0, j = arr.length; i < j; i += chunk) {
                tmp.push(arr.slice(i, i + chunk));
            }
            return tmp;
        }

        var a = [
            {A:'A'},
            {B:'B'},
            {C:'C'},
            {D:'D'},
            {E:'E'},
            {F:'F'},
            {G:'G'},
            {H:'H'},
            {I:'I'}
        ];

        console.log(chunkArray(a, 5));


        console.log('25', arrayData3);
        console.log('26', arrayData);
        arrayData.push(
            chunkArray(a, 5)
        );
        console.log('27', arrayData);

    });

    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart3);
    function drawChart3() {
        var data = google.visualization.arrayToDataTable([
            ['name', 'coast'],
            ['product1', 126],
            ['product2', 258]
        ]);

        var options = {
            title: 'Test'
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
        chart.draw(data, options);
    }





});
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
    ]);

    var options = {
        title: 'Company Performance',
        hAxis: {title: 'Year', titleTextStyle: {color: 'red'}}
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
    ]);

    var options = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart3);
function drawChart3() {
    var data = google.visualization.arrayToDataTable([
        ['name', 'coast'],
        ['product1', 126],
        ['product2', 258]
    ]);

    var options = {
        title: 'Test'
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
}


$(window).resize(function(){
    drawChart1();
    drawChart2();
    drawChart3();
});

// Reminder: you need to put https://www.google.com/jsapi in the head of your document or as an external resource on codepen //
    // // Load the Visualization API and the piechart package.
    // google.load('visualization', '1', {'packages':['corechart']});
    //
    // // Set a callback to run when the Google Visualization API is loaded.
    // google.setOnLoadCallback(drawChart);
    //
    // function drawChart() {
    //     // var jsonData = $.ajax({
    //     //     url: "https://spreadsheets.google.com/feeds/list/1QnPYekM-2yixobzL-Dw6y5HqaqgPJ_sO6HDU2weUxQw/od6/public/values?alt=json",
    //     //     dataType:"json",
    //     //     async: false
    //     // }).responseText;
    //     var jsonData = $.getJSON("https://spreadsheets.google.com/feeds/list/1QnPYekM-2yixobzL-Dw6y5HqaqgPJ_sO6HDU2weUxQw/od6/public/values?alt=json", function (data) {
    //         console.log('data1 -',data);
    //         // Create our data table out of JSON data loaded from server.
    //
    //     var data = new google.visualization.DataTable(jsonData);
    //     console.log('data -',data);
    //
    //     // Instantiate and draw our chart, passing in some options.
    //     var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    //     chart.draw(data, {width: 400, height: 240});
    //     });
    // }

// function drawTable() {
//     var cssClassNames = {
//         'headerRow': 'italic-darkblue-font large-font bold-font',
//         'tableRow': '',
//         'oddTableRow': 'beige-background',
//         'selectedTableRow': 'orange-background large-font',
//         'hoverTableRow': '',
//         'headerCell': 'gold-border',
//         'tableCell': '',
//         'rowNumberCell': 'underline-blue-font'};
//
//     var options = {'showRowNumber': true, 'allowHtml': true, 'cssClassNames': cssClassNames};
//
//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Name');
//     data.addColumn('number', 'Salary');
//     data.addColumn('boolean', 'Full Time');
//     data.addRows(5);
//     data.setCell(0, 0, 'John');
//     data.setCell(0, 1, 10000, '$10,000', {'className': 'bold-green-font large-font right-text'});
//     data.setCell(0, 2, true, {'style': 'background-color: red;'});
//     data.setCell(1, 0, 'Mary', null, {'className': 'bold-font'});
//     data.setCell(1, 1, 25000, '$25,000', {'className': 'bold-font right-text'});
//     data.setCell(1, 2, true, {'className': 'bold-font'});
//     data.setCell(2, 0, 'Steve', null, {'className': 'deeppink-border'});
//     data.setCell(2, 1, 8000, '$8,000', {'className': 'deeppink-border right-text'});
//     data.setCell(2, 2, false, null);
//     data.setCell(3, 0, 'Ellen', null, {'className': 'italic-purple-font large-font'});
//     data.setCell(3, 1, 20000, '$20,000');
//     data.setCell(3, 2, true);
//     data.setCell(4, 0, 'Mike');
//     data.setCell(4, 1, 12000, '$12,000');
//     data.setCell(4, 2, false);
//     var container = document.getElementById('table');
//     var table = new google.visualization.Table(container);
//     table.draw(data, options);
//     table.setSelection([{'row': 4}]);
// }
//
// drawTable();

//     function drawChart() {
//
//         // 4. Retrieve the raw JSON data
//         var jsonData = $.ajax({
//             url: 'https://spreadsheets.google.com/feeds/list/1QnPYekM-2yixobzL-Dw6y5HqaqgPJ_sO6HDU2weUxQw/od6/public/values?alt=json',
//             dataType: 'json',
//         }).done(function (results) {
//
//             console.log(data);
//             // 5. Create a new DataTable (Charts expects data in this format)
//             var data = new google.visualization.DataTable();
//
//             // 6. Add two columns to the DataTable
//             data.addColumn('datetime', 'Time');
//             data.addColumn('number',   'Temp');
//
//             // 7. Cycle through the records, adding one row per record
//             results["packets"].forEach(function(packet) {
//                 data.addRow([
//                     (new Date(packet.timestamp)),
//                     parseFloat(packet.payloadString),
//                 ]);
//             });
//
//             // 8. Create a new line chart
//             var chart = new google.visualization.LineChart($('#chart').get(0));
//
//             // 9. Render the chart, passing in our DataTable and any config data
//             chart.draw(data, {
//                 title:  'Ambient Temperature (/test/temp)',
//                 height: 150
//             });
//
//         });
//
//     }
//
// // 1. Start loading Google Charts
//     google.load('visualization', '1', {
//         packages: ['corechart']
//     });
//
// // 2. Set a callback function to fire when loading is complete
//     google.setOnLoadCallback(drawChart);




// https://docs.google.com/spreadsheets/d/1QnPYekM-2yixobzL-Dw6y5HqaqgPJ_sO6HDU2weUxQw/edit?usp=sharing

