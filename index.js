import dayjs from "./node_modules/dayjs";

const fechaHoy = dayjs().format('DD/MM/YYYY');
const parrafoFecha = document.getElementById("parrafoFecha");

parrafoFecha.textContent = fechaHoy;
console.log(parrafoFecha);
