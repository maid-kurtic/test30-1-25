const arr = [1, 2, 3, 2, 1];
const arr2 = [1,1,3]


const jePalindrom = (arr) => {
    let nizUString = arr.join('')
    let obrnutiArr = arr.reverse().join('');

    if(obrnutiArr == nizUString) {
        return 'Niz je palindrom!'
    }
        return 'Niz nije palindrom'   
}

console.log(jePalindrom(arr))
console.log(jePalindrom(arr2))