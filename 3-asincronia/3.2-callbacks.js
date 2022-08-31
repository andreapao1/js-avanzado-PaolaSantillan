/**
 * Bloque 3 - Solucion 1 Uso de callbacks
 * Un callback es una funcion que se pasa como parametro a otra, con
 * el fin de ejecutar en el momento que la necesitemos.
 * NOTA: No es una buena práctica por el anidamiento que produce (callback hell)
 */


 const validatingPayment = (showSuccessMessage) => {
    setTimeout(() => {
        console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
        showSuccessMessage();
    }, 1000)
}

console.log('1 Presionar el boton comprar');
validatingPayment();
console.log('3 Ver el mensaje de gracias por su compra joven');