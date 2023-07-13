import Juros from "./Juros.js";

const jurosSimples = new Juros (10000, 0.15, 10)
const jurosCompostos = new Juros (10000, 0.07, 24)


console.log(jurosSimples.calcularJurosSimples())
console.log(jurosCompostos.calcularJurosCompostos())
 



