//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento;
}
function onclickButtonPriceDiscount(){

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue); 

   // const resultP = document.getElementById("ResultP");
   // resultP.innerText = "El precio con descuento es: $"; 

    const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento,
})

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice")
}*/