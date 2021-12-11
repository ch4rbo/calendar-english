const date = new Date(); // defino variable "date" que retorna fecha en la consola y en el explorador
// const month = date.getMonth() // defino variable "month" que devuelve el indice del mes en la consola
 // console.log(month); //

const lastDay = new Date(date.getFullYear(),  // creo una variable llamada "lastDay" creo un objeto date y defino año actual y mes (el primero me entrega el año actual y el segundo el mes actual)
date.getMonth() + 1, 0).getDate();

console.log(lastDay);


const months = [ // creo una variable con un array e ingreso los 12 meses del año
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Deceeber",
 ];

 document.querySelector(".date h1").innerHTML
 = months[11];