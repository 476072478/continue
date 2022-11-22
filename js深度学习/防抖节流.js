function fangdou() {
    let time = null
    if (time !== null) {
        clearTimeout(time)
    }
    time = setTimeout(() => {
        console.log('执行')
    }, 2000);
}

// function jieliu() {
//     let time = null
//     if (time) return
//     time = setTimeout(() => {
//         console.log('执行')
//         clearTimeout(time)
//     }, 1000);
// }