// Função para mostrar ou ocultar o botão ao rolar a página
window.onscroll = function() {
    mostrarOcultarBotao();
};

// Função para mostrar ou ocultar o botão com base no scroll da página
function mostrarOcultarBotao() {
    var btnTopo = document.getElementById("btnTopo");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
}

// Função para rolar suavemente ao topo da página
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para navegadores da web
    document.documentElement.scrollTop = 0; // Para o Internet Explorer
}
