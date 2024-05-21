(function () {
  'use strict';

  // Obtener el formulario
  var form = document.querySelector('#contactForm');

  // Agregar un evento de escucha para la validación del formulario
  form.addEventListener(
    'submit',
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    },
    false
  );
})();
