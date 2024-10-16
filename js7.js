const num1 = parseFloat(prompt("Digite o primeiro número:"))
const num2 = parseFloat(prompt("Digite o segundo número:"))
const operacao = prompt("Escolha a operação: +, -, *, /")

let resultado;

switch (operacao) {
    case "+":
        resultado = num1 + num2
        break;fea
    case "-":
        resultado = num1 - num2
        break;
    case "*":
        resultado = num1 * num2
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2
        } else {
            console.log("Erro: Divisão por zero!");
            resultado = null
        }
        break;
    default:
        console.log("Operação inválida!");
        resultado = null
}

if (resultado !== 0) {
    alert(`O resultado é: ${resultado}`)
}
