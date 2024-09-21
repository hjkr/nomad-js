const clock = document.querySelector("h2#clock")
const today = document.querySelector("#date")
// interval 

function getClock() {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate()

    const hour = String(date.getHours()).padStart(2,'0')
    const minute = String(date.getMinutes()).padStart(2,'0')
    const second = String(date.getSeconds()).padStart(2,'0')

    today.innerText = `${year}년 ${month}월 ${day}일`
    clock.innerText = `${hour}:${minute}:${second}`
}

getClock()
setInterval(getClock,1000)
