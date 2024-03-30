/*tema da página dark/light*/
function trocarTema() {
    var body = document.querySelector('body');
    var icon = document.querySelector('.menu-icons #i');

    // Alternar entre os temas
    body.classList.toggle('theme-light');
    body.classList.toggle('theme-dark');

    // Alternar entre os ícones
    if (body.classList.contains('theme-light')) {
        icon.name = 'moon-outline';

        // tema escuro
        document.documentElement.style.setProperty('--color-white', '#979595');
        document.documentElement.style.setProperty('--glass-color', '#1d2433');
        document.documentElement.style.setProperty('--span-color', '#6e6e6e');
        document.documentElement.style.setProperty('--third-color', '#a7a7a7');
        document.documentElement.style.setProperty('--text-color-p', '#979595');
        document.documentElement.style.setProperty('--color-p-light', '#979595');
        document.documentElement.style.setProperty('--first-shadow-color', '#0000001a');
        document.documentElement.style.setProperty('--white', '#fff');
        document.documentElement.style.setProperty('--bg', '#f5f5f5');
    } else {
        icon.name = 'sunny-outline';

        //tema claro
        document.documentElement.style.setProperty('--glass-color', 'rgba(163, 163, 163, 0.075)');
        document.documentElement.style.setProperty('--span-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--color-white', '#d7dce2');
        document.documentElement.style.setProperty('--third-color', '#fff');
        document.documentElement.style.setProperty('--color-p-light', '#fff');
        document.documentElement.style.setProperty('--first-shadow-color', '#0000001a');
        document.documentElement.style.setProperty('--white', '#fff');
        document.documentElement.style.setProperty('--bg', '#f5f5f5');
    }
}









/*Efeito do nav menu movimentação dos itens */
document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu a');

    // Função para verificar se a seção está visível na janela
    function isElementVisible(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Atualiza o estado dos itens do menu com base na posição da janela
    function updateMenuItemsState() {
        menuItems.forEach(function(item) {
            var sectionId = item.getAttribute('href').substring(1); // Remove o "#" do href
            var section = document.getElementById(sectionId);
            
            if (isElementVisible(section)) {
                // Adiciona a classe "active" ao item do menu correspondente à seção visível
                menuItems.forEach(function(menuItem) {
                    menuItem.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    }

    // Verifica a posição da janela ao carregar a página e ao rolar
    window.addEventListener('load', updateMenuItemsState);
    window.addEventListener('scroll', updateMenuItemsState);
});










/*efeito de luz do mouse da página*/
document.addEventListener("DOMContentLoaded", function() {
    const light = document.querySelector(".light");
    document.addEventListener("mousemove", function(e) {
        light.style.left = e.pageX + "px";
        light.style.top = e.pageY + "px";
    });
    document.addEventListener("mouseenter", function() {
        light.style.opacity = 1;
    });
    document.addEventListener("mouseleave", function() {
        light.style.opacity = 0;
    });
});







/*Efeito do titulo da página de movimento das letras*/
let words = document.querySelectorAll(".rotating-text .word");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
rotateText();
setInterval(rotateText, 4000);






/* Função para gerar uma nos icones da página*/
var colors = [
    "rgb(192, 196, 255)",
    "rgb(255, 116, 111)",
    "rgb(255, 111, 190)",
    "rgb(94 234 212)"
];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(elementId) {
    var element = document.getElementById(elementId);
    element.style.color = randomColor();
}
var elementIds = ["color-changing-element-1", "color-changing-element-2", "color-changing-element-3"];

elementIds.forEach(function(elementId) {
    changeColor(elementId);
});

function updateColors() {
    elementIds.forEach(function(elementId) {
        changeColor(elementId);
    });
}

updateColors();

setInterval(updateColors, 2000);










 // Remove a classe 'project-filter-active' de todos os itens
document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll('.project-filter li');
    const projectBoxes = document.querySelectorAll('.project-box');

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
           
            filterItems.forEach(filterItem => {
                filterItem.classList.remove('project-filter-active');
            });
 
            this.classList.add('project-filter-active');

            const filterValue = this.getAttribute('data-filter');

            projectBoxes.forEach(box => {
                const boxFilters = box.classList;
                if (filterValue === 'all' || boxFilters.contains(filterValue)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });
});