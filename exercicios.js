// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt(`Digite a altura:`))
  const largura = Number(prompt(`Digite a largura:`))

  const area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Digite o ano atual:`))
  const anoNascimento = Number(prompt(`Digite o ano em que nasceu:`))

  const idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / altura**2

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt(`Digite seu nome:`)
  const idade = prompt(`Digite sua idade:`)
  const email = prompt(`Digite seu e-mail:`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas = [prompt(`Digite sua primeira cor favorita:`)]
  coresFavoritas.push(prompt(`Digite sua segunda cor favorita:`))
  coresFavoritas.push(prompt(`Digite sua terceira cor favorita:`))

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const semPreju = custo / valorIngresso

  return semPreju
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const temMesmoTamanho = string1.length === string2.length
  
  return temMesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]

  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamanhoArray = array.length
  const ultimoElemento = array[tamanhoArray-1]

  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const tamanhoArray = array.length
  // const apoio = array[0]
  array.splice(1,0,array[tamanhoArray-1])
  array.splice(tamanhoArray,1,array[0])
  array.shift()

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const comparaIgualdade = string1.toUpperCase() === string2.toUpperCase()

  return comparaIgualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Digite o ano atual:`))
  const anoNascimento = Number(prompt(`Digite o ano de nascimento:`))
  const anoEmissaoRg = Number(prompt(`Digite o ano de emissão do RG:`))

  const idade = anoAtual - anoNascimento
  const tempoEmissaoRg = anoAtual - anoEmissaoRg

  let deveRenovar

if (idade <= 20) {
    if (tempoEmissaoRg >= 5) {
      deveRenovar = true
    } else {
      deveRenovar = false
    }
  } else if (idade > 50) {
    if (tempoEmissaoRg >= 15) {
      deveRenovar = true
    } else {
      deveRenovar = false
    }
  } else if (tempoEmissaoRg >= 10) {
    deveRenovar = true
  } else {
    deveRenovar = false
  }

  console.log(deveRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let ehBissexto

  if (ano % 400 === 0) {
    ehBissexto = true
  } else if(ano % 4 === 0 && !(ano % 100 === 0)){
    ehBissexto = true
  } else {
    ehBissexto = false
  }

  return ehBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const ehMaiorIdade = prompt(`Você tem mais de 18 anos? Clique me 'OK' para sim e 'Cancelar' para não`)
  const possuiEnsinoMedio = prompt(`Você possui ensino médio completo? Clique me 'OK' para sim e 'Cancelar' para não`)
  const possuiDisponibilidade = prompt(`Você possui disponibilidade exclusiva durante os horários do curso? Clique me 'OK' para sim e 'Cancelar' para não`)

  const inscricaoEhValida = (ehMaiorIdade === 'sim') && (possuiEnsinoMedio === 'sim') && (possuiDisponibilidade === 'sim')

  console.log(inscricaoEhValida)
}