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

// Carousel //

// Seleccionar todos los elementos con la clase 'carousel-controls'
var carousels = document.querySelectorAll(".carousel-controls");

carousels.forEach(function (carousel) {
    var carouselInner = $(carousel).find(".carousel-inner")[0];
    var cardWidth = $(carousel).find(".carousel-item").width();
    var totalItems = $(carousel).find(".carousel-item").length;
    var clonedItems = [];

    // Clonar los elementos del carrusel
    $(carousel).find(".carousel-item").each(function () {
        clonedItems.push($(this).clone());
    });

    // Agregar elementos clonados al principio y al final del carrusel
    for (var i = 0; i < clonedItems.length; i++) {
        carouselInner.appendChild(clonedItems[i][0]);
    }

    var scrollPosition = 0;
    var isAnimating = false;

    // Manejar eventos para los controles del carrusel actual
    $(carousel).find(".carousel-control-next").on("click", function () {
        if (!isAnimating) {
            isAnimating = true;
            scrollPosition += cardWidth;
            $(carouselInner).animate(
                { scrollLeft: scrollPosition },
                600,
                function () {
                    if (scrollPosition >= cardWidth * totalItems) {
                        scrollPosition = 0;
                        $(carouselInner).scrollLeft(scrollPosition);
                    }
                    isAnimating = false;
                }
            );
        }
    });

    $(carousel).find(".carousel-control-prev").on("click", function () {
        if (!isAnimating) {
            isAnimating = true;
            if (scrollPosition <= 0) {
                scrollPosition = cardWidth * totalItems;
                $(carouselInner).scrollLeft(scrollPosition);
            }
            scrollPosition -= cardWidth;
            $(carouselInner).animate(
                { scrollLeft: scrollPosition },
                600,
                function () {
                    isAnimating = false;
                }
            );
        }
    });
});


// var multipleCardCarousel = document.querySelector("#carouselControls1");
// var carouselInner = $("#carouselControls1 .carousel-inner")[0];
// var cardWidth = $(".carousel-item").width();
// var totalItems = $(".carousel-item").length;
// var clonedItems = [];

// Clonar los elementos del carrusel
// $(".carousel-item").each(function () {
//     clonedItems.push($(this).clone());
// });

// Agregar elementos clonados al principio y al final del carrusel
// for (var i = 0; i < clonedItems.length; i++) {
//     carouselInner.appendChild(clonedItems[i][0]);
// }

// var scrollPosition = 0;
// var isAnimating = false;

// $("#carouselControls1 .carousel-control-next").on("click", function () {
//     if (!isAnimating) {
//         isAnimating = true;
//         scrollPosition += cardWidth;
//         $("#carouselControls1 .carousel-inner").animate(
//             { scrollLeft: scrollPosition },
//             600,
//             function () {
//                 if (scrollPosition >= cardWidth * totalItems) {
//                     scrollPosition = 0;
//                     $("#carouselControls1 .carousel-inner").scrollLeft(scrollPosition);
//                 }
//                 isAnimating = false;
//             }
//         );
//     }
// });

// $("#carouselControls1 .carousel-control-prev").on("click", function () {
//     if (!isAnimating) {
//         isAnimating = true;
//         if (scrollPosition <= 0) {
//             scrollPosition = cardWidth * totalItems;
//             $("#carouselControls1 .carousel-inner").scrollLeft(scrollPosition);
//         }
//         scrollPosition -= cardWidth;
//         $("#carouselControls1 .carousel-inner").animate(
//             { scrollLeft: scrollPosition },
//             600,
//             function () {
//                 isAnimating = false;
//             }
//         );
//     }
// });