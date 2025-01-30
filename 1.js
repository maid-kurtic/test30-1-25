let arr1 = ["--X","X++","X++", 'X++'];
let arr2 = ["--X","X++","X++", 'X++', 'X--'];


const inkrementIDekrement = (arr) => {
    let vrijednost = 0;
    arr.forEach((e,i) => {
        if(e == '++X' || e == 'X++') {
            vrijednost++;
        }
       else {
        vrijednost--;
       }
    })
    return vrijednost
}

console.log(inkrementIDekrement(arr1))
console.log(inkrementIDekrement(arr2))

