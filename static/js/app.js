// from data.js
var tableData = data;

var filterBtn = d3.select("#filter-btn");

var tbody = d3.select("tbody");

var queryDate = 'tbd';

filterBtn.on("click", function() {
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var queryDate = inputField.property('value');
    var filteredData = tableData.filter(function (sighting) {
        return sighting.datetime === queryDate;
        });

    tbody.text('');

    filteredData.forEach(record => { 
        var row = tbody.append('tr');
        Object.entries(record).forEach( ([key, value]) => {
            row.append('td').text(value);
        });
    });
});

