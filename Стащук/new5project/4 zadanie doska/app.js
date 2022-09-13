const board = document.querySelector('#board')
const colors = ['#FF9900', '#CC9933', '#FFCC00', '#FF6600', '#6699CC', '#FFFF66']


const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight


const SQUARES_NUMBER = Math.floor(availableScreenWidth / 20) * Math.floor(availableScreenHeight / 20)

console.log(availableScreenWidth)
console.log(availableScreenHeight)
console.log(SQUARES_NUMBER)

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}

function setColor (element) {
    const a = colors[Math.round(Math.random() * (colors.length - 1))]
    element.style.backgroundColor = a
    element.style.boxShadow = `0 0 2px ${a}, 0 0 10px ${a}`
}

function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor() {
    const a = colors[Math.round(Math.random() * (colors.length - 1))]
    console.log(a)
}

getRandomColor()
// let a = Math.round(Math.random() * colors.length)
// console.log(a)