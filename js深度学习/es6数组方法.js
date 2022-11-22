let arr = [1, 2, 3]
let newarr = arr.map(item => {
    if (item === 2) {
        return item
    }
})
let myarr = arr.findIndex((item) => {
    return item === 2
})

let myinclueds = arr.includes(2)
console.log(myinclueds)