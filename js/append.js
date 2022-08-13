// where to add 
const added = document.getElementById('foods');

// what to be added 
const listItem = document.createElement('li');
listItem.innerText = 'vagetable'

// add the child 
added.appendChild(listItem);

// where to added 
const mainContainer = document.getElementById('main-container')

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'This is made for JavaScript dom';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'javaScript';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'DOM';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Try harder';
ul.appendChild(li3);

let li4 = document.createElement('li');
li4.innerText = 'got succeed';
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section)

// set innerHTML directly 

const lastSection = document.createElement('section');
lastSection.innerHTML = `
        <h1>Challenging Module</h1>
        <ul>
            <li>Dom</li>
            <li>Javascript</li>
            <li>ES6</li>
            <li>React</li>
        </ul>
`
mainContainer.appendChild(lastSection);