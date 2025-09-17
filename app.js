let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.querySelector('input').value;

    if (novoAmigo.value == "") {
        alert("Escreva um nome para adicionar");
    } else {
        amigos.push(novoAmigo);
    }

    limparCampo();
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li"); 
    item.textContent = amigos[i]; 
    lista.appendChild(item); 
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function sortearAmigo() {
    
}