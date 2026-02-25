function ranking(qtdVitorias, qtdDerrotas) {
    let pontuacao = qtdVitorias - qtdDerrotas
    let classificacao = ""

    switch (true) {
        case pontuacao <= 10:
            classificacao = "Ferro"
            break

        case pontuacao <= 20:
            classificacao = "Bronze"
            break

        case pontuacao <= 50:
            classificacao = "Prata"
            break
        
        case pontuacao <= 80:
            classificacao = "Ouro"
            break

        case pontuacao <= 90:
            classificacao = "Diamante"
            break

        case pontuacao <= 100:
            classificacao = "Lendário"
            break

            default:
                classificacao ="Imortal"
    }

    return {pontuacao, classificacao}
}

let resultado = ranking(180,20)

console.log(
    `O Herói tem de saldo de ${resultado.pontuacao} está no nível de ${resultado.classificacao}`
)