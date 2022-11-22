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
Function.prototype.mybind = function (context, args) {
    context.fn = this
    context.fn(...args)
    delete context.fn
}
function callmyname(a, b, c) {
    console.log(this.name)
    console.log(a, b, c)
}
// callmyname('a', 'b', 'c')
// callmyname.mycall(obj, 'a', 'b', 'c')
// callmyname.apply(obj, ['a', 'b', 'c'])
callmyname.bind(obj, 'a', 'b', 'c')