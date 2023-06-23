/*
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

for(let i = 1 ; i <= 5 ; i++ ) {
    console.log(` ${i} - ${maioresPaises[i - 1]}
   
    `)
}
*/
/*
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
for(let i=0; i < maioresPaises.length; i++) {
    ranking = i+1
    console.log(`${ranking} - ${maioresPaises[i]}`)
}
*/

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

const mostrarRanking =(array) => {

for(i = 0; i < array.length; i++){
    const elemento = array[i]
    const ranking = i + 1
    console.log( `${ranking} - ${elemento}`)

 }
}
mostrarRanking(maioresPaises)