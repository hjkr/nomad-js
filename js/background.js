// const images = [
//     {"url":"https://www.pexels.com/photo/red-dahlia-flower-60597/",
//      "author":"Pixabay"
//     },
//     {"url":"https://www.pexels.com/photo/blue-green-and-brown-peacock-65894/",
//         "author":"Pixabay",
//     },
//     {"url":"https://www.pexels.com/photo/yellow-flower-1322444/",
//         "author":"Zahaoha",
//     },
//     {"url":"https://www.pexels.com/photo/close-up-photography-of-pink-tulip-flower-36729/",
//         "author":"Pixabay",
//     },
   
// ]

const images =[
    "0.jpeg"
]

const imgIndex = Math.floor(Math.random()*images.length)

const bgImage = document.createElement("img")  
bgImage.src = `img/${images[imgIndex]}`

document.body.appendChild(bgImage)
