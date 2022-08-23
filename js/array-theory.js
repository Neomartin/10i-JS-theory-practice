// Como se define un data de tipo array

let listadoFrutas = [ 
    'frutilla',    //0 
    'naranja',     //1
    'mandarina',   //2 
    'manzana',     //3 
    'pera',        //4
    'uva',         //5
    'durazno'      //6
];

const numero = 324

// const primerAlumno = [ 1,  20, true, 'String de texto enorme bla bla', false, 1.78, 'Jhon Doe']

//Busca en el array el elemento con el indice 6
// console.log(listadoFrutas[6]);

// Antes de hacer el push
console.log('Listado antes', listadoFrutas);
console.log('Length antes', listadoFrutas.length);


console.log(`_________________________________`)
// Inserto nuevos elementos al array
listadoFrutas.push('Kiwi');
listadoFrutas.push('Cereza');

// Muestro como queda el array luedo de pushear elementos
console.log('Después:', listadoFrutas);
console.log('Después:', listadoFrutas.length);

// ejecuto algún codigo 

document.write(listadoFrutas + '<br>')
document.write(listadoFrutas + '<br>')