
const images =[
    "0.jpeg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
]

const imgIndex = Math.floor(Math.random()*images.length)

const bgImage = document.createElement("img")  
bgImage.src = `img/${images[imgIndex]}`

document.body.appendChild(bgImage)
