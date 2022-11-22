let obj = {
    name: '小唐',
    age: 18,
    sex: '男'
}
// console.log(Object.keys(obj))
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.entries(obj))
// Object.defineProperties(obj, {
//     myname: { enumerable: true, value: 3 },
//     dhanwiudawio: { enumerable: false, value: 312 }
// })
// for (let i in obj) {
//     console.log(i)
// }

Object.defineProperty(obj, 'name', {
    get() {
        console.log('dahio')
    }
})
obj.name