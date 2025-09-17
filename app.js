let amigos = [];

function adicionarAmigo() {
    let novoAmigo = document.querySelector('input').value;

    if (novoAmigo.value == "") {
        alert("Escreva um nome para adicionar");
    }

    amigos.push(novoAmigo);

    limparCampo();
    atualizarLista();
}
