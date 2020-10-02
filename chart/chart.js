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
                //backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 10, 8, 3]
            },
            {
                label: "Rechteroog",
                //backgroundColor: "rgb(99, 99, 99)",
                borderColor: "rgb(99, 99, 99)",
                data: [2, 5, 6, 1, 5, 9]
            },
        ]},
    
        // Configuration options go here
        options: {}
    });
}

