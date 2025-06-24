const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('button');
let operacion = "";

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const valor = boton.textContent;

    if (valor === '=') {
      try {
        resultado.value = eval(operacion);
        operacion = resultado.value;
      } catch (error) {
        resultado.value = "Error";
        operacion = "";
      }
    } else if (valor === 'C') {
      operacion = "";
      resultado.value = "";
    } else if (valor === '←') {
      operacion = operacion.slice(0, -1);
      resultado.value = operacion;
    } else {
      operacion += valor;
      resultado.value = operacion;
    }
  });
});
