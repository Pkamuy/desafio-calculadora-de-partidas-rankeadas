function ranking(qtdVitorias, qtdDerrotas) {
    let pontuacao = qtdVitorias - qtdDerrotas
    let classificacao = ""

    switch (true) {
        case qtdVitorias <= 10:
            classificacao = "Ferro"
            break

        case qtdVitorias <= 20:
            classificacao = "Bronze"
            break

        case qtdVitorias <= 50:
            classificacao = "Prata"
            break
        
        case qtdVitorias <= 80:
            classificacao = "Ouro"
            break

        case qtdVitorias <= 90:
            classificacao = "Diamante"
            break

        case qtdVitorias <= 100:
            classificacao = "Lendário"
            break

            default:
                classificacao ="Imortal"
    }

    return {pontuacao, classificacao}
}

let resultado = ranking(85,20)

console.log(
    `O Herói tem de saldo de ${resultado.pontuacao} está no nível de ${resultado.classificacao}`
)