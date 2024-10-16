let num = Number(prompt('Insira um número inteiro:'))

if (num > 0) {
    alert(`O número ${num} é positivo.`);
} else if (num === 0) {
    alert(`O número ${num} é zero.`);
} else {
    alert(`O número ${num} é negativo.`);
}