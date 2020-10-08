window.onload = function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
            labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                label: "Linkeroog",
                borderColor: "rgb(99, 99, 132)",
                data: [2, 5, 7, 5, 3, 8]
            },{
                label: "Rechteroog",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 4, 6]
            }],
        },
    
        // Configuration options go here
        options: {}
    });
}

