//versturen contactformulier

function write_name() {
    var lblwrite_name = document.getElementById('form');
    var txtfirstname = document.getElementById('voornaam');
    var txtlastname = document.getElementById('achternaam');
    var btnreset = document.getElementById('btnreset');
    
    lblwrite_name.innerHTML = "Je bericht is verstuurd. We nemen z.s.m. contact met je op " + txtfirstname.value + " " + txtlastname.value; 

    btnreset.style.visibility = "visible"
}

function resetform() {
    var lblwrite_name = document.getElementById('lblwrite_name');
    var txtfirstname = document.getElementById('voornaam');
    var txtlastname = document.getElementById('achternaam');

    lblwrite_name.innerHTML = "";
    txtfirstname.value = "";
    txtlastname.value = "";
}