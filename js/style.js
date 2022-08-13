const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '2px solid black';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'silver'
}
const ourVillages = document.getElementById('village');
ourVillages.style.backgroundColor = 'black';

const heading = document.getElementById('header');
heading.classList.add('text-center')