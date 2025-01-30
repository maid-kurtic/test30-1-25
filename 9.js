let str1 = 'Silent'
let str2 = 'listen'
let str3 = 'Hello'
let str4 = 'World'



const jesuAnagrami = (str1, str2) => {
    let lowerCaseStr1= str1.toLowerCase()
    let lowerCaseStr2= str2.toLowerCase()
    let arr1 = lowerCaseStr1.split('')
    let arr2 = lowerCaseStr2.split('')
    let validacija = true;

        if(lowerCaseStr1 == lowerCaseStr2  || lowerCaseStr1.length != lowerCaseStr2.length) validacija = false;
        
            arr1.forEach((e,i) => {           
            if(!arr2.includes(e)) {
                validacija =  false;
            }
            })
            return validacija
        
}

console.log(jesuAnagrami(str1,str2))
console.log(jesuAnagrami(str3,str4))