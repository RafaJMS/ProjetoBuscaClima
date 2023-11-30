const key = "e0283766cee7e7e70be7e75409ae8042"

function pesquisar(){
    let cidade = document.querySelector(".input-cidade").value
    buscarDados(cidade)
}

async function buscarDados(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt-br&units=metric`).then(Response=>Response.json());
    exibirDados(dados)
}
function exibirDados(dados) {
    console.log(dados)
}
