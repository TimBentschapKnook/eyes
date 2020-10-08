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
                borderColor: "rgb(0, 0, 180)",
                backgroundColor: "rgb(0, 0, 180, 0.25)",
                data: [2, 5, 7, 5, 3, 8]
            },{
                label: "Rechteroog",
                borderColor: "rgb(180, 0, 0)",
                backgroundColor: "rgb(180, 0, 0, 0.25)",
                data: [0, 10, 5, 2, 4, 6]
            }],
        },
    
        // Configuration options go here
        options: {}
    });
}

