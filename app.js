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
    item.textContent = `${i+1}. ${amigos[i]}`; 
    lista.appendChild(item); 
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function sortearAmigo() {
    if (amigos.lengh === 0) {
        alert("Adicione um amigo antes de sortear");
    } else {
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[numeroSorteado];

        let nomeDoSorteado = document.getElementById('resultado');
        nomeDoSorteado.innerHTML = `A pessoa sorteada foi: ${amigoSorteado}`;
    }
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      adicionarAmigo();
    }
  });