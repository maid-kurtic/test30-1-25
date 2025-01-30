let arr1 = [1,2,2,3,1,4];
let arr2 = [1,2,2,3,1,4,4,4,4,4,4];

const ukupnaFrekvencijaElemenataKojiImajuNajvecuFrekvenciju = (arr) => {
   let najvecaFrekvencija = 0;
   let counter = 0;
  
let brojac = arr.reduce((acc, e) => {
        acc.set(e, (acc.get(e) || 0) + 1)
    return acc;
    }, new Map())

    let paroviObj = brojac.entries()
    let paroviArr = [...paroviObj]
    console.log(paroviArr)
    paroviArr.forEach((e, i) => {
        if(e[1] > paroviArr[0][0]) {
            najvecaFrekvencija = e[1]
        }
    })

    paroviArr.forEach((e,i) => {
        if(e[1] == najvecaFrekvencija) {
            counter++
        }
    })
    return najvecaFrekvencija * counter
    }

    console.log(ukupnaFrekvencijaElemenataKojiImajuNajvecuFrekvenciju(arr1))
    console.log(ukupnaFrekvencijaElemenataKojiImajuNajvecuFrekvenciju(arr2))


 
