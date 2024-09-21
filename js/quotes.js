const quotes = [
    {   
        quote:'Better late than never.',
        author:'Unknown'
    },
    {   
        quote:'Isn\'t it a pleasure to study, and to practice what you have learned.',
        author:'Confucius'
    },
    {   
        quote:'If one remains not annoyed when his greatness is not recognized in his time, isn\’t he a sage?',
        author:'Confucius'
    },
    {   
        quote:'To go beyond is as wrong as to fall short.',
        author:'Confucius'
    },
    {   
        quote:'What superior man seeks is in himself. What the mean man seeks is in others.',
        author:'Confucius'
    },
    {   
        quote:'Life is really simpe, but we insist on making it complicated.',
        author:'Confucius'
    },
    {   
        quote:'Habit is second nature.',
        author:'Unknown'
    },
    {   
        quote:'Study the past if you would define the future.',
        author:'Confucius'
    },
    {   
        quote:'Men\'s natures are alike, it is their habits that carry them far apart.',
        author:'Confucius'
    },
    {   
        quote:'The essence of knowledge is, having it, to apply it; not having it, to confess your ignorance.',
        author:'Confucius'
    },
]


const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const index = Math.floor(Math.random()*quotes.length)


quote.innerText = quotes[index].quote
author.innerText = `- ${quotes[index].author} -`
