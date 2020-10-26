function addUserData() {
    // Random var
    var gebruikersnaam = "Jan Klaasen";
    var geboortedatum = "1990-01-01";
    var adres = "Hendriksstraat 1"
    var woonplaats = "Sint-Johannes";
    var mailadres = "Voorbeeld@test.nl";

    // array1 voor het zoeken naar de id's, array2 vult in de gevonden id's
    var array1=["gebruikersnaam", "geboortedatum", "adres", "woonplaats", "mailadres"];
    var array2=[gebruikersnaam, geboortedatum, adres, woonplaats, mailadres];

    // For loop voor het invullen van de gegevens
    for (i = 0; i < array1.length; i++) {
        document.getElementById(array1[i]).value = array2[i];
    }
}

addUserData();