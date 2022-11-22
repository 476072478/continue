var name = '小钟'
let obj = {
    name: "小唐",
    age: 21
}
Function.prototype.mycall = function (context, ...args) {
    context.fn = this
    context.fn(...args)
    delete context.fn
}
Function.prototype.myapply = function (context, args) {
    context.fn = this
    context.fn(...args)
    delete context.fn
}
Function.prototype.mybind = function (context, ...args) {
    let fn = this
    let newcontext = JSON.parse(JSON.stringify(context))
    newcontext.fn = fn
    return function (...args) {
        return newcontext.fn(...args)
    }
}
function callmyname(a, b, c) {
    console.log(this.name)
    console.log(a, b, c)
}
// callmyname('a', 'b', 'c')
// callmyname.mycall(obj, 'a', 'b', 'c')
// callmyname.apply(obj, ['a', 'b', 'c'])
// console.log(callmyname.bind(obj, 'a', 'b', 'c'))
// console.log(callmyname.mybind(obj, 'a', 'b', 'c'))
callmyname.bind(obj, '1', '2', '3')()
