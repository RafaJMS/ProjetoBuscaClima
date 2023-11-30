const key = "e0283766cee7e7e70be7e75409ae8042"

function pesquisar(){
    let cidade = document.querySelector(".input-cidade").value
    buscarDados(cidade)
}

async function buscarDados(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response=>Response.json());
    exibirDados(dados)
}
function exibirDados(dados) {
    console.log(dados)
    document.querySelector('.cidade-previsao').innerHTML = dados.name 
    document.querySelector('.grau-previsao').innerHTML = `${Math.floor(dados.main.temp)}°C` 
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector(".texto-previsao").innerHTML = `${(dados.weather[0].description)}`
    document.querySelector(".imagem-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
