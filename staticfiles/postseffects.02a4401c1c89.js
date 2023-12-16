// Zoom de figuras carousel //
window.addEventListener('load', function () {
    var svgs = document.querySelectorAll('.img-wrapper');

    function ajustarImagenes() {
        svgs.forEach(function (svg) {
            var imagenFiltrada = svg.querySelector('.imagen-filtrada');
            var minAltura = parseFloat(getComputedStyle(svg).minHeight);
            var relacionAspecto = imagenFiltrada.naturalWidth / imagenFiltrada.naturalHeight;
            var nuevaAltura = minAltura;
            var nuevaAnchura = minAltura * relacionAspecto;

            imagenFiltrada.style.height = nuevaAltura + 'px';
            imagenFiltrada.style.width = nuevaAnchura + 'px';
        });
    }

    // Ajustar el tamaño de las imágenes al cargar y al cambiar el tamaño de la ventana
    window.addEventListener('resize', ajustarImagenes);
    svgs.forEach(function (svg) {
        var imagenFiltrada = svg.querySelector('.imagen-filtrada');
        imagenFiltrada.addEventListener('load', ajustarImagenes);
    });

    ajustarImagenes();
});

// Efecto caption carousel y filtro imagen //

$(document).ready(function () {
    $(".card-project").hover(
        function () {
            $(this).find('.carousel-caption').addClass('active'); // Añade clase para mostrar el caption
            $(this).find('.imagen-filtrada').addClass('active'); // Añade clase para mantener el efecto del <svg>
        },
        function () {
            $(this).find('.carousel-caption').removeClass('active'); // Quita clase para ocultar el caption
            $(this).find('.imagen-filtrada').removeClass('active'); // Quita clase para desactivar el efecto del <svg>
        }
    );
});