let words = ["pay","attention","practice","attend"];
let prefix1 = 'at';
let prefix2 = 'p';

let pretraga = (words, prefix) => {
    let duzinaPrefixa = prefix.length;
    let odgovarajuceRijeci = [];

    words.forEach((e,i) => {
        let prefixElementaUNizu = e.slice(0, duzinaPrefixa)
        if(prefixElementaUNizu == prefix) {
            odgovarajuceRijeci.push(e)
        }
    })
    return odgovarajuceRijeci
}

console.log(pretraga(words, prefix1))
console.log(pretraga(words, prefix2))