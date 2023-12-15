// script.js

let currentMode = "animado"; // Modo animado por defecto

function cambiarModo(modo) {
  const body = document.body;

  if (modo === "animado") {
    // Configurar la animación .gif de fondo (se obtiene el nombre del .gif del HTML)
    const gifUrl = document.getElementById("gif-url").innerText;
    body.style.background = `url(${gifUrl})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
  } else if (modo === "oscuro") {
    body.style.background = "#191919";
  } else if (modo === "claro") {
    body.style.background = "#F2F2F2";
  }

  currentMode = modo;
  // Guardar el modo seleccionado en localStorage
  localStorage.setItem("modo", modo);

  const modoAnimadoBtn = document.getElementById("modoAnimado");
  const modoOscuroBtn = document.getElementById("modoOscuro");
  const modoClaroBtn = document.getElementById("modoClaro");

  // modoAnimadoBtn.style.border = modo === "animado" ? "1px solid #a8ff00" : "none";
  // modoOscuroBtn.style.border = modo === "oscuro" ? "1px solid #a8ff00" : "none";
  // modoClaroBtn.style.border = modo === "claro" ? "1px solid #a8ff00" : "none";
  modoAnimadoBtn.style.boxShadow = modo === "animado" ? "0 0 0 1px #a8ff00" : "none";
  modoOscuroBtn.style.boxShadow = modo === "oscuro" ? "0 0 0 1px #a8ff00" : "none";
  modoClaroBtn.style.boxShadow = modo === "claro" ? "0 0 0 1px #a8ff00" : "none";


}


// Al cargar la página, establecer el modo guardado previamente (si existe) o modo animado por defecto
window.onload = function () {
  const savedMode = localStorage.getItem("modo");
  if (savedMode) {
    cambiarModo(savedMode);
  } else {
    // Si no hay un modo guardado, establecer el modo animado por defecto
    cambiarModo(currentMode);
  }
};
