let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://images.shobserver.com/news/690_390/2022/11/22/fed6d5fba6804aaabeff11419a8e64f2.jpg')
xhr.send()
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr)
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.response)
        }
    }
}