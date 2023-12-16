$(document).ready(function () {
    var currentModalIndex = 0;
    var totalModals = $('.carousel-item').length;

    // Al hacer clic en un enlace con la clase "carousel-item", muestra la modal
    $('.carousel-item').on('click', function (e) {
      e.preventDefault();

      // Obtiene el data-modal-target del enlace
      var modalTarget = $(this).data('modal-target');

      // Obtiene el contenido del modal desde el modalTarget correspondiente
      var modalContent = $(modalTarget).html();

      // Actualiza el contenido de la modal con el contenido obtenido
      $('#postDetailModal .modal-body').html(modalContent);
      $('#postDetailModal .modal-body a').css('color', '#000');

      // Muestra la modal
      $('#postDetailModal').modal('show');

      // Actualiza el índice del modal actual
      currentModalIndex = $(this).index('.carousel-item');
      updateNavigationButtons();
    });

    // Navegación al modal anterior
    $('#prevModalBtn').on('click', function () {
      currentModalIndex = (currentModalIndex - 1 + totalModals) % totalModals;
      updateModalContent();
    });

    // Navegación al siguiente modal
    $('#nextModalBtn').on('click', function () {
      currentModalIndex = (currentModalIndex + 1) % totalModals;
      updateModalContent();
    });

    // Cerrar modal al hacer clic fuera de él
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.modal-content').length) {
        $('#postDetailModal').modal('hide');
      }
    });

    // Función para actualizar el contenido del modal según el índice actual
    function updateModalContent() {
      var modalTarget = $('.carousel-item').eq(currentModalIndex).data('modal-target');
      var modalContent = $(modalTarget).html();
      $('#postDetailModal .modal-body').html(modalContent);
      $('#postDetailModal .modal-body a').css('color', '#000');
      updateNavigationButtons();
    }

    // Función para actualizar la visibilidad de los botones de navegación
    function updateNavigationButtons() {
      $('#prevModalBtn').prop('disabled', totalModals <= 1);
      $('#nextModalBtn').prop('disabled', totalModals <= 1);
    }
  });

// Modal view simple
//   $(document).ready(function () {
//     // Al hacer clic en un enlace con la clase "carousel-item", muestra la modal
//     $('.carousel-item').on('click', function (e) {
//       e.preventDefault();

//       // Obtiene el data-modal-target del enlace
//       var modalTarget = $(this).data('modal-target');

//       // Obtiene el contenido del modal desde el modalTarget correspondiente
//       var modalContent = $(modalTarget).html();

//       // Actualiza el contenido de la modal con el contenido obtenido
//       $('#postDetailModal .modal-body').html(modalContent);
//       $('#postDetailModal .modal-body a').css('color', '#000');

//       // Muestra la modal
//       $('#postDetailModal').modal('show');
//     });
//   });