// Script para mostrar o botão "Voltar ao Topo"
const backToTopButton = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
};

// Efeito de aparecimento suave
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com data-anime
    const elementos = document.querySelectorAll('[data-anime]');
    
    // Configurações do efeito
    const windowHeight = window.innerHeight * 0.85;
    
    // Função do efeito
    const animarScroll = () => {
        elementos.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const itemVisible = itemTop - windowHeight < 0;
            
            if (itemVisible) {
                item.classList.add('animate');
            }
        });
    };
    
    // Ativa na carga inicial
    animarScroll();
    
    // Ativa no scroll
    window.addEventListener('scroll', animarScroll);
});

// Adiciona data-anime AUTOMATICAMENTE em todos os elementos visíveis
window.onload = function() {
    const allElements = document.querySelectorAll('body *');
    allElements.forEach(el => {
        el.setAttribute('data-anime', '');
    });
};
