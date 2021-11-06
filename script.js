var numberToFind = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
var maxAttempt = prompt("Nombre maximal d'essai");
var attempt = 0;

function findNumber() {
    
    var message;
    var number = document.forms.myForm.number.value;
    
    if (isNaN(number)) {
        alert('Vous devez indiquer un nombre entier.');
        return false;
    }

    attempt++;
    
    if (number < numberToFind && attempt < maxAttempt) {
        message = 'Trop bas !';
    } else if (number > numberToFind && attempt < maxAttempt) {
        message = 'Trop haut !';
    } else if (number == numberToFind && attempt <= maxAttempt) {
        message = 'Vous avez gagné !';
    } else {
        message = 'Vous avez perdu !';
    }
      
    alert(message);
    return false;
}