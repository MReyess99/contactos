//  Lista de contactos con datos predefinidos
let listaContactos = ["Angel Ventura", "Daniel Molina", "Miguel Diaz"];
imprimirContactos(listaContactos);

//  Funcion para añadir un nuevo contacto a la lista
console.log("");
function aggContacto(contacto) {
  listaContactos.push(contacto);
}
aggContacto("Samuel Vargas")
imprimirContactos(listaContactos);

//  Funcion para borrar un contacto existente de la lista 
console.log("");
function borrarContacto(contacto){
    let i = listaContactos.indexOf(contacto);
    if (i !== -1){
        listaContactos.splice(i, 1);
    }
}
borrarContacto("Angel Ventura");
imprimirContactos(listaContactos);

//Funcion para imprimir contactos en consola
function imprimirContactos(contactos){
    console.log("Lista de contactos");
    for (const iterator of contactos) {
        console.log(iterator); 
    }
} 