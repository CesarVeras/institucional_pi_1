const extra_heigh = 93.8 + 112;
const window_height = window.innerHeight;

// Verifica se o tamanho do conteudo é menor que o tamanho disponível da tela, se sim, aumenta o tamanho do corpo para preencher melhor.
document.body.onload = () => {
    // altura da janela do browser
    let height = parseInt(getComputedStyle(document.body).getPropertyValue('height'),10);
    if (height < window_height) {
        document.querySelector('section').style.height = (window_height - extra_heigh) + 'px';
    }
}