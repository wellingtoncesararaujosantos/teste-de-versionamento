function multiPlicar(x, y = 10){
    return x * y
}

var a = multiPlicar(4, 2 );

console.log(a)

var b = multiPlicar(6, 7);

console.log(b)

var infoCal = function(a,b,c){
    return a + b + c;
}


console.log(infoCal(2,5,7));

const soma = (num1, num2) =>{
    return num1 + num2;
}
console.log(soma(3,6));

const numeros = [1,2,3,4,5];

const valores = numeros.map((num) => num * num)

console.log(valores);

var listaProdutos = ["geladeira", "fogão", "air fryer"];
var listaEmMaiscula = listaProdutos.map(primeiraEmMaicula);

function primeiraEmMaicula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

var nomes = ["wellington", "monica"];
var nomeMaicusla = nomes.map(primeiraEmMaicula)


console.log(listaEmMaiscula)
console.log(nomeMaicusla)