
const backToTopButton = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
};


document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com data-anime
    const elementos = document.querySelectorAll('[data-anime]');
    
 
    const windowHeight = window.innerHeight * 0.85;
    

    const animarScroll = () => {
        elementos.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const itemVisible = itemTop - windowHeight < 0;
            
            if (itemVisible) {
                item.classList.add('animate');
            }
        });
    };
    
   
    animarScroll();
    
 
    window.addEventListener('scroll', animarScroll);
});

window.onload = function() {
    const allElements = document.querySelectorAll('body *');
    allElements.forEach(el => {
        el.setAttribute('data-anime', '');
    });
};
