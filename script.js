function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function adicionarEfeitoPulsar(botao) {
    botao.addEventListener('mouseover', () => {
        botao.style.transform = 'scale(1.01)';
    });

    botao.addEventListener('mouseout', () => {
        botao.style.transform = 'scale(1)';
    });

    botao.addEventListener('click', () => {
        alert(`Você clicou no ${botao.textContent}!`);
    });
}
const botoesPulsar = document.querySelectorAll('button.pulsar');
botoesPulsar.forEach(adicionarEfeitoPulsar);
