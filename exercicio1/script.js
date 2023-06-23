function voceQuerCoxinhas (){
    let pessoa = prompt(`Você deseja comer mais coxinhas?
    "S" - sim
    "N" - não`).toUpperCase()
    

    let conta = 0

    while (pessoa === "S"){
        conta += 2.50
pessoa = prompt(`Deseja comer mais coxinhas?
"S" - sim
"N" - não`).toUpperCase()

    }
    console.log(`O valor total da conta é ${conta}!`)
}
   voceQuerCoxinhas()