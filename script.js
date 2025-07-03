// Ao abrir a página, perguntar o nome
window.onload = function() {
    let nome = prompt("Olá! Qual é o seu nome?");
    if (nome) {
        document.getElementById("saudacao").textContent = `Seja bem-vindo(a), ${nome}!`;
    } else {
        document.getElementById("saudacao").textContent = "Seja bem-vindo(a)!";
    }
}
