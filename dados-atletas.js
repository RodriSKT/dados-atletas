// Aqui ocorre a criação da classe Atleta, criando as variável desejadas e as funções necessárias//
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas 
    }

    // As funções a seguir mostram apenas as informações do atleta//
    obtemNomeAtleta() {
    return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta() {
    return `Idade: ${this.idade}`
    }
    obtemAlturaAtleta() {
    return `Altura: ${this.altura}`
    }
    obtemPesoAtleta() {
    return `Peso: ${this.peso}`
    }

    // Nessa função ela usar vários critérios para definir a categoria do atleta de acordo com a idade//

    calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
    return "infatil"
    }
    else if (this.idade > 11 && this.idade <= 13) {
    return "juvenil"
    }
    else if (this.idade > 13 && this.idade <= 15) {
    return "intermediário"
    }
    else if (this.idade > 15 && this.idade <= 30) {
    return "adulto"
    }
    else {
    return "Sem categoria"
    }
    }

    // Calcula o IMC do atleta usando os dados já declarados//
    calculaIMC() {
    let imc = atleta.peso / (atleta.altura * atleta.altura)
    return `IMC: ${imc.toFixed(2)}`
    }

    obtemNotasAtleta() {
    return `Notas: ${this.notas}`
    }

    // Na função que calcula a média válida, são retiradas a primeira e a última nota.//
    // Em seguida o programa calcula a média dos valores restantes.//

    calculaMediaValida() {
    let notasValidas = this.notas.slice(1, this.notas.length -1)
    let soma = 0
    notasValidas.forEach(function(notaValida) {
    soma = soma + notaValida
    })
    let media = soma / notasValidas.length
    return `Média do atleta: ${media.toFixed(2)}`
    }

    // Essa função apenas mostra as notas válidas//
    obtemNotasValidas() {
    return `Notas válidas: ${this.notas.slice(1, -1)}`
    }
    
    }
   // Aqui são declarados os dados do atleta que por acaso sou eu mesmo// 
    const atleta = new Atleta("Rodrigo Alves",
        29, 73, 1.75,
        [10, 9.34, 8.42, 10, 7.88]);

    //Aqui ocorre a chamadas das funções para o console//
    console.log(atleta.obtemNomeAtleta())
    console.log(atleta.obtemIdadeAtleta())
    console.log(atleta.obtemPesoAtleta())
    console.log(atleta.obtemAlturaAtleta())
    console.log(atleta.obtemNotasAtleta())
    console.log(`Categoria: ${atleta.calculaCategoria()}`)
    console.log(atleta.calculaIMC())
    console.log(atleta.calculaMediaValida())
    console.log(atleta.obtemNotasValidas())
    
    
    
    