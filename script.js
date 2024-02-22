function redirectUser(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  var username = document.getElementById("username").value; // Obtener el nombre de usuario ingresado

  // Objeto que mapea nombres de usuario a URLs
  var userUrls = {
    "Kioscos": "PDV/index.html",
    "Mayoristas": "MAYORISTAS/index.html",
    "Exclusivos": "EXCLUSIVOS/index.html",
    "Promotores": "PROMOTORES/index.html",
    "Supervisores": "SUPERVISORES/index.html"
  };

  // Verificar si el nombre de usuario está en el objeto
  if (username in userUrls) {
    // Redirigir a la URL correspondiente
    window.location.href = userUrls[username];
  } else {
    // Mostrar un mensaje de error si el nombre de usuario no está en el objeto
    alert("Nombre de usuario incorrecto.");
  }
}
