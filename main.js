const resultado = document.getElementById("resultado");
/* 
document => todo el contenido del Html

.getElementById() => buscame un elemento por su Id
"resultado" seria su nombre y en el html
se encuentra en  <input type="text" id="resultado" disabled>
*/

resultado.value = "0"; // Mostramos 0 al inicio

const botones = document.querySelectorAll("button");
/*
Esto busca todos los botones "<button>" en el html y los guarda
en la variable "botones"

querySelectorAll => "buscame todos los elementos que coinciden con 
lo que está entre parentesis ()"
*/

let operacion = "";
/* variable donde se va a guardar cada acción donde pulsamos un botón */

botones.forEach(boton => {
  /*
  botones => es una lista con todos los botones de la 
  calculadora (<div class="botones">)
  .forEach(...) => para cada boton de esa lista, haz lo siguiente...
  boton => {...} => "cuando estés en un boton especifico, llama 
  a ese boton y ejecuta esto que hay entre llaves {}"
  */

  boton.addEventListener('click', () => {
    const valor = boton.textContent;

    /*
    Dentro del forEach, le estamos diciendo a cada botón:
    "Oye botón, cuando te hagan clic (addEventListener('click', ...)), quiero que 
    ejecutes este código que tengo dentro."

    Entonces, cada botón al ser clicado, va a guardar el texto del botón,
    por ejemplo, "1", "+", "="
    y agregará a la operación, 
    calcular, borrar, etc.)
    */

    if (valor === 'C') {
      // Si el botón es "C", limpiamos todo
      operacion = "";
      resultado.value = "0";
    } else if (valor === '←') {
      // Si el botón es ←, borramos el último carácter
      operacion = operacion.slice(0, -1);
      resultado.value = operacion || "0"; // Mostrar 0 si está vacío
    } else if (valor === '=') {
      // Si el botón es "=", evaluamos la operación
      try {
        // Reemplazamos la "x" por "*"
        operacion = operacion.replace(/x/g, '*');
        resultado.value = eval(operacion); // Calculamos el resultado
        operacion = resultado.value; // Guardamos el resultado para seguir operando
      } catch (error) {
        resultado.value = "Error";
        operacion = "";
      }
    } else {
      // Evitar que empiece con un operador
      const operadores = ['+', '-', '*', '/', 'x'];
      if (operacion === "" && operadores.includes(valor)) {
        return; // Ignorar si empieza con operador
      }

      // Si está en "0" o vacío, reemplazamos
      if (resultado.value === "0" || operacion === "") {
        operacion = valor;
      } else {
        operacion += valor;
      }

      resultado.value = operacion;
    }
  });
});
