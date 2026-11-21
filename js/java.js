
const nom = document.querySelector("#nom");
const tel = document.querySelector("#tel");
const email = document.querySelector("#email");
const resto = document.querySelector("#resto");
const date = document.querySelector("#date");
const personnes = document.querySelector("#personnes");


function verifierChamp(champ) {

    if (champ.value.trim() === "") {
        champ.classList.remove("valide");
        champ.classList.add("invalide");
        return false;
    }

    if (champ === tel) {
        if (!/^[0-9]{8}$/.test(champ.value)) {
            champ.classList.remove("valide");
            champ.classList.add("invalide");
            return false;
        }
    }

    if (champ === email) {
        if (!email.checkValidity()) {
            champ.classList.remove("valide");
            champ.classList.add("invalide");
            return false;
        }
    }

    if (champ === personnes) {
        if (champ.value < 1 || champ.value > 20) {
            champ.classList.remove("valide");
            champ.classList.add("invalide");
            return false;
        }
    }

    champ.classList.remove("invalide");
    champ.classList.add("valide");

    return true;
}

const champs = [nom, tel, email, resto, date, personnes];

champs.forEach(function(champ) {

    champ.addEventListener("input", function() {
        verifierChamp(champ);
    });

    champ.addEventListener("change", function() {
        verifierChamp(champ);
    });

});

const formulaire = document.querySelector("#reservation-form");
formulaire.addEventListener("submit", function(event) {

    let valide = true;
    champs.forEach(function(champ) {
        if (!verifierChamp(champ)) {
            valide = false;
        }
    });

    if (!valide) {
        event.preventDefault();
    }

});
