import CalculadoraDeArea from "./CalculadoraDeArea.js";

const calculadoraTriangulo = new CalculadoraDeArea ('triangulo', 16, 28)
const calculadoraQuadrado = new CalculadoraDeArea ('quadrado', 18, 38)
const calculadoraRetangulo = new CalculadoraDeArea ('retangulo', 46, 58)

console.log(calculadoraTriangulo.calcular())
console.log(calculadoraQuadrado.calcular())
console.log(calculadoraRetangulo.calcular()) 



