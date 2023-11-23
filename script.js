const numeroAleatorio = parseInt(Math.random() * 20 + 1);
let quantidadePalpite = 0;


document.getElementById("btnEnviar").onclick = function () {

    let palpite = document.getElementById("guessField").value

    quantidadePalpite += 1;
    let qntPalpites = document.getElementById("qntPalpites");
    qntPalpites.innerHTML = `Total de palpites: ${quantidadePalpite} <br>`

    if (palpite == "") {
        alert("ERROR, digite um número")
    }

    if (palpite == numeroAleatorio) {
        qntPalpites.innerHTML += (`Parabéns, você acertou, voce levou ${quantidadePalpite} tentativas para acertar o número`)

    } else if (palpite < numeroAleatorio) {
        alert('o número é maior')
    } else {
        alert("o número é menor")
    } 
}