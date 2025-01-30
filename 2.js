let arr = [5, 1, 9, 3, 7 ,2];

const svakiDrugiNajmanji = (arr) => {
let sortiran = arr.sort();
let krajnjiNiz = [];

sortiran.forEach((e, i) => {
    if(i != 0 && i % 2 != 0) {
        krajnjiNiz.push(e)
    }
})
return(krajnjiNiz)

}

console.log(svakiDrugiNajmanji(arr))