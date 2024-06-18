const notas = [8, 6.5, 8.5, 7.5]
let soma = 0

for(let i = 0; i < notas.length; i++){
 soma += notas[i]; //soma = soma + notas[i]
 
}
const media= soma/notas.length;
console.log(media)
console.log(soma)
