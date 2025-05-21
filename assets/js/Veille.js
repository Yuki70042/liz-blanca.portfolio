
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



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear(); 
    });
    
    