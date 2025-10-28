// Color Picker
document.querySelectorAll('.colPicker').forEach(col => {
   col.addEventListener('click', () => {
    if (col.classList.contains('red')) {
        document.body.setAttribute('class', "redBack");
    } else if (col.classList.contains('green')) {
        document.body.setAttribute('class', "greenBack");
    } else if (col.classList.contains('blue')) {
        document.body.setAttribute('class', "blueBack");
    } else {
        document.body.removeAttribute('class');
    }
   })
});

let url = window.location.href;
let locationName = url.split('/').pop();

const allNavLinks = document.querySelectorAll('nav ul li');
allNavLinks.forEach(link => {
let childEl = link.querySelector('a')
    if (childEl.getAttribute('href') === locationName) {
        link.setAttribute('class', "currentPage");
    }
});

