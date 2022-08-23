const msgNumber = 230

console.log('Un mensaje propio ' + msgNumber);

console.log(msgNumber);

// alert('Esto es un alert 3.0')

// console.log('Si no saco el alert no se actualiz2 el liveServer');


// const fruta = prompt('Ingrese alguna fruta cartelito');

// console.log('La fruta ingresada en PROMPT es: ' + fruta)


// parseInt transforma un dato (siempre que el dato se pueda transformar a un número) a dato TIPO Númerico y tiene parte decimal la elimina
// parseFloat transforma un dato (siempre que el dato se pueda transformar a un número) a dato TIPO Númerico mantiene la parte decimal
let valorProducto = prompt('Ingrese valor de KG de producto');
valorProducto = parseInt(valorProducto)

console.log('valorProducto', valorProducto )

let cantidadProducto = prompt('Ingrese cantidad del producto que lleva el cliente');

cantidadProducto = parseFloat(cantidadProducto);

console.log('cantidad producto', cantidadProducto);

const totalAPagar = valorProducto * cantidadProducto;

console.log('El valor total a abonar es de $' + totalAPagar);