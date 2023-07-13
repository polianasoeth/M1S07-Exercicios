import Personagem from "./Personagem.js";

const personagem = new Personagem ('Ian')

console.log(personagem.percentualVida)

personagem.sofreuDano(6)
console.log(personagem.percentualVida)
personagem.usouKitMedico()
console.log(personagem.percentualVida)
