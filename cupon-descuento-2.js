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

if (!coupons.includes(couponValue)){
    alert ("El cupón " + couponValue + " no es válido");
} else if(couponValue === 20){
    descuento = 20;
} else if (couponValue === 25){
    descuento = 25;     
} else if (couponValue === 30){
    descuento = 30;    
}