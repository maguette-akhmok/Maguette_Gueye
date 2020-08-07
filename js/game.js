var sACT=100;
var sPER=0;

function play() {
   var perdu = false;
  var pari = document.getElementById("choix").value;
  var mise = parseInt(document.getElementById("number").value);
  if (sACT == 0) {
    alert("Votre porte monnaie est vide");
  } else if (mise > sACT) {
    alert("La somme misée est supérieure à celle de votre porte monnaie");
  } else {
    var gain = 0;
    sACT -= mise;
    var resultat = Math.round(Math.random() * 36);

    if (resultat == 0) {
      perdu = true;
    } else if (resultat == pari) {
      gain = mise + mise * 35;
    } else if (
      (pari == "Pair" && resultat % 2 == 0) ||
      (pari == "Impair" && resultat % 2 != 0)
    ) {
      gain = mise + mise;
    } else {
      perdu = true;
    }

  if (perdu) {
    alert("... le chiffre gagnant est  " + resultat +" ...\n Vous avez PERDU " + mise+" 000 frcs");
    sPER += mise;
  } else {
    alert("... le chiffre gagnant est  " + resultat + " ... \nvous avez gagné " + gain+ " frcss" );
    sACT+=gain;
  }
    document.getElementById("sACT").value=sACT;
    document.getElementById("sPER").value=sPER;
}
}