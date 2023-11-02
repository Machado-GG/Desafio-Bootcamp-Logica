const herois = [
    ['Varian', 6600],
    ['Alucard', 9490],
    ['Ignus', 8990],
    ['Gnar', 4670]
]

for (let i = 0; i < herois.length; i++){
    var heroi = herois[i][0];
    var pontosXP = herois[i][1];
    var rank;
    
    if (pontosXP < 1000) {
        rank = 'Ferro';
    } else if (pontosXP >= 1001 && pontosXP <= 2000) {
        rank = 'Bronze';
    } else if (pontosXP >= 2001 && pontosXP <= 5000) {
        rank = 'Prata';
    } else if (pontosXP >= 6001 && pontosXP <= 7000) {
        rank = 'Ouro';
    } else if (pontosXP >= 7001 && pontosXP <= 8000) {
        rank = 'Platina';
    } else if (pontosXP >= 8001 && pontosXP <= 9000) {
        rank = 'Ascendente';
    } else if (pontosXP >= 9001 && pontosXP <= 10000) {
        rank = 'Imortal';
    } else if (pontosXP > 10001){
        rank = 'Radiante';
    }
        
    console.log("O herói", heroi, "está no rank", rank + "!");
}