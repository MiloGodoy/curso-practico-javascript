//Código del cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//  perimetroCuadrado();
//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}


//console.log("El área del cuadrado es: "+ areaCuadrado + "cm2");
console.groupEnd();
//Código del triángulo

console.group("Triángulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 
    + "cm " 
    + ladoTriangulo2 
    + "cm " 
    + baseTriangulo 
    + "cm" 
);-*/

//console.log("La altura del triángulo es: "+ alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triangulo es: "+ perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2
}
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
//console.log("El área del triángulo es: "+ areaTriangulo + "cm2");
console.groupEnd();


//Código del círculo

console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: "+ radioCirculo + "cm");
//Diámetro
function diametroCirculo(radio){
    return radioCirculo * 2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del círculo es: "+ diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("PI es: "+ PI + "cm");
//Circunsferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es: "+ perimetroCirculo + "cm");
//Área
function areaCirculo(radio){
    return (radio *radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El área del círculo es: "+ areaCirculo + "cm");

//Aquí se interactúa con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
/*

function calcularPerimetroTriangulo(){
    const input = document.getElementById("lado1, lado2, base");
    const value = input.value;

    const perimetro = perimetroTriangulo(lado1, lado2, altura);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("base, altura");
    const value = input.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}*/

//Triángulo Isóscele
/*
function alturaTriangulo(lado1, lado2, base){
    if(lado1 == lado2 && lado1 != base){
        alert("Triángulo isóscele");
        const altura = (math.sqrt((lado1 * lado 1)- ((base /2) * (base /2))))
    }
    else{
        alert("No es isosceles")
    }
}*/