document.getElementById("validateForm").addEventListener("click", validateForm());

function validateForm() {
    var hasError = false;
    var fields = document.querySelectorAll("input");

    // Loop over alle velden, en kijk of de value(s) leeg zijn
    for(var i = 0; i < fields.length; i++) {
        if(fields[i].value == '') {
            hasError = true;
        }
    }

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
        var txtfirstname = document.getElementById('firstname');
        var txtlastname = document.getElementById('lastname');

        lblwrite_name.innerHTML =  "<span class=confirm> Bedankt voor je bericht! We nemen z.s.m. contact met je op " + txtfirstname.value + " " + txtlastname.value + "</span>"; 
        document.querySelector('form1').submit();
    }
}