//versturen contactformulier 
/*function write_name() {
    var lblwrite_name = document.getElementById('form');
    var txtfirstname = document.getElementById('voornaam');
    var txtlastname = document.getElementById('achternaam');
       
    lblwrite_name.innerHTML =  "<span class=confirm> Bedankt voor je bericht! We nemen z.s.m. contact met je op " + txtfirstname.value + " " + txtlastname.value + "</span>"; 

} 
*/

//Reset contactformulier
function resetform() {
    var txtfirstname = document.getElementById('firstName');
    var txtlastname = document.getElementById('lastName');
    var txtemailadres = document.getElementById('emailAdress');
    var txttelefoonnummer = document.getElementById('phoneNumber')
    var txtbericht = document.getElementById('messageForm')

    txtfirstname.value = "";
    txtlastname.value = "";
    txtemailadres.value = "";
    txttelefoonnummer.value = "";
    txtbericht.value = "";
}

function validate() {

    var hasError = false;
    var fields = document.querySelectorAll("input");

    // Loop over alle velden, en kijk of de value(s) leeg zijn
    for(var i = 0; i < fields.length; i++) {
        if(fields[i].value == '') {
            hasError = true;
        }
    }

    // Kijk of er een error is (hasError true is)
    if(hasError) {
        alert('Je moet alles invullen');
    }

    // Kijk of er in het emailadres een @ zich bevindt
    if(document.getElementById('emailAdress').value.indexOf('@') == -1) {
        alert('Er is geen @ in email gebruikt')
        hasError = true;
    }

    // Als er geen errors aanwezig zijn 
    if(!hasError) {
        var lblwrite_name = document.getElementById('form');
        var txtfirstname = document.getElementById('firstName');
        var txtlastname = document.getElementById('lastName');

        lblwrite_name.innerHTML =  "<span class=confirm> Bedankt voor je bericht! We nemen z.s.m. contact met je op " + txtfirstname.value + " " + txtlastname.value + "</span>"; 
        document.querySelector('form1').submit();
    }
    
}