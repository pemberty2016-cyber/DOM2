function calcular () {
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);
    
    let subtotal = cantidad*precio;
    document.getElementById("subtotal").value = subtotal;

    let iva = subtotal * 0.19;
    document.getElementById("iva").value = iva ;

    let descuento = subtotal * 0.1 ;
    document.getElementById("descuento").value = descuento ;

    let total = subtotal+iva-descuento ;
    document.getElementById("total").value = total;
}