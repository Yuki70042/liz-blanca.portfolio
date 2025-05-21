
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('.animated-title');
    const lines = title.innerHTML.split('<br>'); 
    title.innerHTML = ''; 

    lines.forEach((line, lineIndex) => {
        const lineDiv = document.createElement('div'); 

        line.split('').forEach((letter, index) => {
            const span = document.createElement('span');

            
            span.innerHTML = letter === ' ' ? '&nbsp;' : letter;

            lineDiv.appendChild(span); 

            
            setTimeout(() => {
                span.style.opacity = '1'; 
                span.style.transform = 'translateY(0)';
            }, (lineIndex * line.length + index) * 150); 
        });
        title.appendChild(lineDiv); 
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector('.start-button');

    startButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetID = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetID); 

        if (targetElement) {
            // Faire défiler la page de manière fluide
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});





// Permet d'afficher la date correcte dans le footer
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("year").textContent = new Date().getFullYear(); 
});



document.addEventListener("DOMContentLoaded", function() {
    // Crée un observateur
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe 'visible' lorsque l'élément entre dans la vue
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Sélectionne tous les éléments à observer
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});


window.addEventListener("load", function () {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    setTimeout(function () {
        preloader.style.opacity = '0';

        setTimeout(function () {
            preloader.style.display = 'none'; // Cache le preloader
            console.log('Preloader caché, main content affiché');

            mainContent.style.display = 'block'; // <-- si jamais il était hidden par erreur
            mainContent.style.animation = 'fadeInContent 0.5s forwards';
        }, 300);

    }, 2250);
});