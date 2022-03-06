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

//crear array de cupones
const coupons ={
    "20",
    "25",
    "30"
}

const inputCoupon = document.getElementById("InputCupon");
const couponValue = inputCoupon.value;

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCouppon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){
        case coupons[0];
            descuento = 20;
            break;
        
        case coupons[1]:
            descuento = 25;
            break;

        case coupons [2]:
            descuento = 30;
            break;
    }

    const precioConDescuento = calcularPrecioDescuento(priceValue, descuento;
        
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: " + precioConDescuento; 

}