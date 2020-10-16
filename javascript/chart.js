// Laat de functie wanneer de site in geladen is
window.onload = function () {
    // Haalt de data op van het id "myChart" en maakt een 2d chart
    var ctx = document.getElementById("myChart").getContext("2d");
    // Maakt een nieuwe chart aan met de data ctx
    var myChart = new Chart(ctx, {
        // Het type chart wat er gemaakt wordt
        type: "line",

        // De data voor de chart
        data: {
            // Horizontale as verdeling
            labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
            // Data defineren
            datasets: [{
                // Eerste data

                // Naam van eerste data
                label: "Linkeroog",
                // Kleur van de lijn
                borderColor: "rgb(0, 0, 180)",
                // Vul kleur van het gebied onder de lijn
                backgroundColor: "rgb(0, 0, 180, 0.25)",
                // Data punten, deze komen overeen met het aantal stappen in "lables:"
                data: [2, 5, 7, 5, 3, 8]
            },{
                // Tweede data

                // Naam van tweede data
                label: "Rechteroog",
                // Kleur van de lijn
                borderColor: "rgb(180, 0, 0)",
                // Vul kleur van het gebied onder de lijn
                backgroundColor: "rgb(180, 0, 0, 0.25)",
                // Data punten, deze komen overeen met het aantal stappen in "lables:"
                data: [0, 10, 5, 2, 4, 6]
            }],
        },
    
        // Configuratie options
        options: {}
    });
}