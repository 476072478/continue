const myperson = {
    name: '小唐',
    age: 21,
    sex: '男',
    toJSON() {
        alert('想拷贝我？吃屎去吧你！！')
    }
}
let Jsonperson1 = JSON.stringify(myperson, ['name', 'age'], 5)
let Jsonperson2 = JSON.stringify(myperson, (key, value) => {
    if (key === 'sex') {
        return undefined
    }
    return value
})
console.log(Jsonperson1)