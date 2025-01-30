let arr1 = [0, 1, 0, 3, 12];
let arr2 = [0, 0, 5, 0, 7, 0, 9]

const pomjerNule = (arr) => {
    let nule = arr.filter((e) => e == 0);
    let bezNula = arr.filter((e) => e != 0)
    return bezNula.concat(nule)  
}

console.log(pomjerNule(arr1))
console.log(pomjerNule(arr2))