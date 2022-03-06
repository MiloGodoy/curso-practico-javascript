function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/*const lista1 = [
    100,
    200,
    500,
    400000000,
];*/
var array;

function onClickArray(){
    array = document.getElementById(inputArray)

}

array.sort();

const mitadArray = parseInt(array.length / 2);

function esPar(numerito){
    if(numerito % 2 == 0){
        return true;
    } else{
        return false;
    }
}

let mediana;

if(esPar(array.length)){

    const elemento1 = array[mitadArray];
    const elemento2 = array[mitadArray - 1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2; 

}else{
    mediana = array[mitadArray];

}