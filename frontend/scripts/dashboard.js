
$(function() {
    var barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'sept', 'Oct','nov', 'dec'],
        datasets: [{
            label: 'Female',
            backgroundColor: window.chartColors.red,
            data: []
        }, {
            label: 'Male',
            backgroundColor: window.chartColors.blue,
            data: []
        }, {
            label: 'Anon',
            backgroundColor: window.chartColors.green,
            data: []
        }]
    
    };

    let year = new Date().getUTCFullYear();

    window.loadData = function(isForward) {
        if(isForward) {
            year++;
        } else if(isForward === false) {
            year--;
        }

        $("#year").text("Year: "+year);

        $.ajax('/api/donate/stats/' + year).done(function(data) {
            barChartData.datasets.forEach(function(dataset, i) {
                let setlabel = dataset.label;
                dataset.data = data.map(function(userType) {
                    return userType[setlabel];
                });
            });
            window.myBar.update();
        });
    }

    $("#canvas").click(function(e) {
        let month = myBar.getElementAtEvent(e)[0]._index;
        window.location = `/view.html?date=${year}-${month + 1}`;
    });

    window.onload = function() {
        var ctx = document.getElementById('canvas').getContext('2d');
        window.myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });

        window.loadData();
    };


});