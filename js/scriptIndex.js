/*Loaging*/
document.addEventListener("DOMContentLoaded", function() {
    // Espera a que la página esté completamente cargada
    window.addEventListener("load", function() {
        // Oculta la pantalla de carga y muestra el contenido principal
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    });
});

/* CLICE BOTONES SEGMENTOS*/
document.addEventListener('DOMContentLoaded', function() {
    const bannerItems = document.querySelectorAll('.banner-item');

    bannerItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.content').style.opacity = '1';
            item.querySelector('.content').style.transform = 'scale(1.05)';
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.content').style.opacity = '0';
            item.querySelector('.content').style.transform = 'scale(1)';
            item.style.transform = 'scale(1)';
        });
    });
});

// JavaScript para desplazamiento suave en navegadores que no soportan CSS scroll-behavior
document.querySelectorAll('.services-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: "smooth"
        });
    });
});

/*Carousel de Opiniones*/
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade', // Puedes cambiar el efecto a 'slide', 'cube', 'coverflow', 'flip', etc.
        fadeEffect: {
            crossFade: true
        },
        on: {
            slideChangeTransitionStart: function () {
                var slides = document.querySelectorAll('.swiper-slide');
                slides.forEach(function (slide) {
                    slide.style.opacity = '0';
                });
                var activeSlide = document.querySelector('.swiper-slide-active');
                activeSlide.style.opacity = '1';
            }
        }
    });
});

/*ChatBot Whatsapp*/
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    const whatsappChat = document.querySelector('.whatsapp-chat');
    const whatsappIcon = document.querySelector('.whatsapp-icon');

    whatsappButton.addEventListener('mouseenter', function() {
        whatsappChat.style.display = 'block';
    });

    whatsappButton.addEventListener('mouseleave', function() {
        whatsappChat.style.display = 'none';
    });

    whatsappIcon.addEventListener('click', function() {
        const whatsappLink = document.querySelector('.whatsapp-footer a').href;
        window.open(whatsappLink, '_blank');
    });
});