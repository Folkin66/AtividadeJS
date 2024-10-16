let alt = Number(prompt ('Qual é a sua altura?'))
let pes = Number(prompt ('Qual é o seu peso?'))

if (!isNaN(alt) && !isNaN(pes) && alt > 0 && pes > 0) {
    alt = alt / 100; 
    let calc = pes / (alt * alt);

    if (calc >= 18.5 && calc <= 24.9) {
        alert(`O seu IMC é ${calc.toFixed(2)}, e está dentro do saudável.`);
} else {
    alert(`Seu IMC é de ${calc.toFixed(2)}, e não está dentro do saudável.`);
}}