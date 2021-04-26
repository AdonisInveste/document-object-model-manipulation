const container = document.querySelector('#container')


//  use relational selectors

console.dir(container.firstElementChild)

const controls = document.querySelector('.controls')


//  creating and appending a DOM element to a webpage.


const content = document.createElement('p')
content.classList.add('content')
content.textContent = 'This is the glorious text-content!';

container.appendChild(content)

const paragaph = document.createElement('p')

const word = document.createTextNode(' “Hey I’m red!”')

const append = paragaph.appendChild(word)

container.appendChild(append)

const header = document.createElement('h3')

header.style.color = 'blue'

console.log(header)

header.innerHTML = 'I’m a blue h3!'

container.appendChild(header)

const division = document.createElement('div')
const h1 = document.createElement('h1')
const p = document.createElement('p')

division.appendChild(h1)

division.appendChild(p)

console.log(division)