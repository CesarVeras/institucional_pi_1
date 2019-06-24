const header = document.querySelector('header');
const header_size = parseFloat(getComputedStyle(header).getPropertyValue('height'));
const footer = document.querySelector('footer');
const footer_size = parseFloat(getComputedStyle(footer).getPropertyValue('height'));

const extra_heigh = header_size + footer_size;
const window_height = window.innerHeight;

// Verifica se o tamanho do conteudo é menor que o tamanho disponível da tela, se sim, aumenta o tamanho do corpo para preencher melhor.
document.body.onload = () => {
    // altura da janela do browser
    let height = parseInt(getComputedStyle(document.body).getPropertyValue('height'), 10);
    if (height < window_height) {
        document.querySelector('section').style.height = (window_height - extra_heigh) + 'px';
    }
}