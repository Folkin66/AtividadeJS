idade = 27

let categoria;

switch (true) {
    case (idade >= 0 && idade <= 12):
        categoria = "Criança";
        break;
    case (idade >= 13 && idade <= 17):
        categoria = "Adolescente";
        break;
    case (idade >= 18 && idade <= 64):
        categoria = "Adulto";
        break;
    case (idade >= 65):
        categoria = "Idoso";
        break;
    default:
        categoria = "Idade inválida!";
}

console.log(categoria);