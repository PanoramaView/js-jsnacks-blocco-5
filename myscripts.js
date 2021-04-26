var ArrayZucchine= [
    {
        peso: 10,
        lunghezza: 10,
    },
    {
        peso: 11,
        lunghezza: 11,
    },
    {
        peso: 12,
        lunghezza: 12,
    },
    {
        peso: 13,
        lunghezza: 13,
    },
    {
        peso: 14,
        lunghezza: 14,
    },
    {
        peso: 15,
        lunghezza: 15,
    },
    {
        peso: 16,
        lunghezza: 16,
    },
    {
        peso: 17,
        lunghezza: 17,
    },
    {
        peso: 18,
        lunghezza: 18,
    },
    {
        peso: 19,
        lunghezza: 19,
    },
]

var ArrayZucchinePiccole= [];


var totalePeso = 0;
var totalePesoP = 0;

for( var i = 0; i < ArrayZucchine.length; i++){ 
    
    if ( ArrayZucchine[i].lunghezza > 15) { 
        ArrayZucchinePiccole.push(ArrayZucchine[i]);
        ArrayZucchine.splice(i, 1); 
        i--;
    }

}

for (var i = 0; i < ArrayZucchine.length; i++) {
    var see = ArrayZucchine[i];
    totalePeso += see.peso;
    console.log("Zucchina " + (i + 1) + "\n Peso: " + see.peso + "; Lunghezza: " + see.lunghezza + ".");
}

for (var i = 0; i < ArrayZucchinePiccole.length; i++) {
    var see = ArrayZucchinePiccole[i];
    totalePesoP += see.peso;
    console.log("Zucchinapiccola " + (i + 1) + "\n Peso: " + see.peso + "; Lunghezza: " + see.lunghezza + ".");
}

console.log("Peso Totale Zucchine: " + totalePeso);
console.log("Peso Totale Zucchine piccole: " + totalePesoP);