function calculaTabuada (){
    let escolhaUmNumero = Number(prompt(`Escolha um numero de 1 a 10, para multiplicação:`))

    for( let i = 1; i <= 10; i++ ){
        const resultado = escolhaUmNumero * i
        console.log(`${escolhaUmNumero} * ${i} = ${resultado}`)
    
    }
    
    }
    calculaTabuada()
/*
function calculaTabuada() {
    let numeroTabuada = Number(prompt('TABUADA - Digite um número:'))
    let fator = 1
    while (fator <= 10) { 

        const resultado = numeroTabuada * fator
        
        console.log(`${numeroTabuada} X ${fator} = ${resultado}`)
        
        fator++
    }
}
calculaTabuada()
*/
/*
console.log(`Bem vindo ao TABUTECH, sua tabuada inteligente !`)
  console.log('\n')

let numRecebido = Number(prompt("A partir de qual número quer iniciar sua tabuada?"))

for (let j = numRecebido; j <= 10; j++) {
    console.log(`Tabuada de ${j}:`)

  for (let i = 1; i <= 10; i++) {
    console.log(`${j} x ${i} = ${j * i}`)
  }

  console.log('\n')

}

console.log(`Espero ter ajudado, VOLTE SEMPRE !`)
*/