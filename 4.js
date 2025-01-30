const matrica = [[1,2,3], 
                 [4,5,6], 
                 [7,8,9]];

const sumaElemenataNaDijagonalama = (arr) => {
    let trag = 0;
    let posI = Math.ceil(arr.length / 2 - 1)
    let posJ = Math.ceil(arr[0].length / 2 -1);  

    arr.forEach((e,i) => {
        e.forEach((f,j) => {
            if(i ===j) {
                trag += f ;
            }})
    })
    arr.forEach((e,i) => {       
        e.reverse()
        e.forEach((f,j) => {     
            if(i!= posI && j != posJ) {
                if(i == j) {
                    trag += f ;
             }}
        })
    })
    console.log(trag)
}

sumaElemenataNaDijagonalama(matrica)