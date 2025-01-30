let arr1 = [2, 4, 6, 8, 10];
let arr2 = [3, 6, 9, 15]

const jeAritmetici = (arr) => {
    let razlika = arr[1] - arr[0];
    let validacija = true;

    arr.forEach((e, i) => {
        if(i > 0) {
        if(arr[i] - arr[i - 1] != razlika) validacija = false
        
        }
    })
return validacija
}

console.log(jeAritmetici(arr1))
console.log(jeAritmetici(arr2))