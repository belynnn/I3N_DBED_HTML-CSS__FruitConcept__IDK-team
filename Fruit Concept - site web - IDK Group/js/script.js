function returnFormCommande(){
    // GELEE GROSEILLES
    var prixArticle = 1.99; 
    // Demande le nombre d'article
    var quantiteArticle = document.getElementById("quantiteArticle").value; 

    // CONFITURE ABRICOTS
    var prixArticle1 = 2.54; 
    // Demande le nombre d'article
    var quantiteArticle1 = document.getElementById("quantiteArticle1").value; 

    // CONFITURE PRUNES
    var prixArticle2 = 2.54; 
    // Demande le nombre d'article
    var quantiteArticle2 = document.getElementById("quantiteArticle2").value;

    // CONFITURE CERISES
    var prixArticle3 = 1.85; 
    // Demande le nombre d'article
    var quantiteArticle3 = document.getElementById("quantiteArticle3").value; 

    // CONFITURE PECHES
    var prixArticle4 = 1.53; 
    // Demande le nombre d'article
    var quantiteArticle4 = document.getElementById("quantiteArticle4").value; 

    // CONFITURE PRUNES
    var prixArticle5 = 1.53; 
    // Demande le nombre d'article
    var quantiteArticle5 = document.getElementById("quantiteArticle5").value; 

    // CONFITURE ABRICOTS
    var prixArticle6 = 1.85; 
    // Demande le nombre d'article
    var quantiteArticle6 = document.getElementById("quantiteArticle6").value; 

    // CONFITURE ABRICOTS
    var prixArticle7 = 1.85; 
    // Demande le nombre d'article
    var quantiteArticle7 = document.getElementById("quantiteArticle7").value; 

    // CONFITURE POMMES
    var prixArticle8 = 1.54; 
    // Demande le nombre d'article
    var quantiteArticle8 = document.getElementById("quantiteArticle8").value; 

    // CONFITURE SURREAUx
    var prixArticle9 = 2.01; 
    // Demande le nombre d'article
    var quantiteArticle9 = document.getElementById("quantiteArticle9").value; 

    // CONFITURE FIGUES
    var prixArticle10 = 2.23; 
    // Demande le nombre d'article
    var quantiteArticle10 = document.getElementById("quantiteArticle10").value; 

    // CONFITURE MANDARINES
    var prixArticle11 = 3.12; 
    // Demande le nombre d'article
    var quantiteArticle11 = document.getElementById("quantiteArticle11").value; 

    var total0 = prixArticle*quantiteArticle; // total gelée groseille
    var total1 = prixArticle1*quantiteArticle1; // total confiture d'abricot
    var total2 = prixArticle2*quantiteArticle2; // total confiture d'abricot
    var total3 = prixArticle3*quantiteArticle3; // total confiture d'abricot
    var total4 = prixArticle4*quantiteArticle4; // total confiture d'abricot
    var total5 = prixArticle5*quantiteArticle5; // total confiture d'abricot
    var total6 = prixArticle6*quantiteArticle6; // total confiture d'abricot
    var total7 = prixArticle7*quantiteArticle7; // total confiture d'abricot
    var total8 = prixArticle8*quantiteArticle8; // total confiture d'abricot
    var total9 = prixArticle9*quantiteArticle9; // total confiture d'abricot
    var total10 = prixArticle10*quantiteArticle10; // total confiture d'abricot
    var total11 = prixArticle11*quantiteArticle11; // total confiture d'abricot


    var total = total0+total1+total2+total3+total4+total5+total6+total7+total8+total9+total10+total11;
    var total = total.toFixed(2); // Affiche 2 chiffres après la virgule
    document.getElementById("reponseFormCommande").innerHTML = "Le montant total de vos achats s'élève à "+total+" € TVAC.";
};
function resetFormCommande(){
    document.getElementById("reponseFormCommande").innerHTML= "";
};



function returnFormExo1(){
    
    var nom = document.getElementById("nom"); // Demande d'entrer son nom de famille
    var prenom = document.getElementById("prenom"); // Demande d'entrer son prénom
    var mail = document.getElementById("mail"); // Demande d'entrer son adresse mail
    var message = document.getElementById("message"); // Demande d'entrer son message

    // Message personnalisé qui reprend les informations entrées par l'utilisateur
    document.getElementById("reponseFormExo1").innerHTML = "Votre message est bien envoyé, nous vous répondrons dans les plus brefs délais, merci.";
};

function resetFormExo1(){ // Reset le formulaire
    document.getElementById("reponseFormExo1").innerHTML = "";
};





