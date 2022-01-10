function gallery() {
    var swiper = new Swiper(".catalog-info .mySwiper", {
        spaceBetween: 0,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 6,
            },
        }
    });
    var swiper2 = new Swiper(".catalog-info .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".catalog-info .swiper-button-next",
            prevEl: ".catalog-info .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function gallery2() {
    var swiper = new Swiper(".gallery2 .mySwiper", {
        spaceBetween: 0,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
        }
    });
    var swiper2 = new Swiper(".gallery2 .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery2 .swiper-button-next",
            prevEl: ".gallery2 .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function gallery3() {
    var swiper = new Swiper(".gallery3 .mySwiper", {
        spaceBetween: 0,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
            },
        }
    });
    var swiper2 = new Swiper(".gallery3 .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery3 .swiper-button-next",
            prevEl: ".gallery3 .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}


function sliderCatalog() {
    var swiper = new Swiper('.catalog1 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ' .catalog1 .swiper-button-next',
            prevEl: ' .catalog1 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    })
}

function sliderCatalog2() {
    var swiper = new Swiper('.catalog2 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ' .catalog2 .swiper-button-next',
            prevEl: ' .catalog2 .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    })
}

function sliderCatalogGallery() {
    var swiper = new Swiper('.catalog-gallery .swiper-container', {
        spaceBetween: 0,
        navigation: {
            nextEl: ' .catalog-gallery .swiper-button-next',
            prevEl: ' .catalog-gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 2,
            },
        }
    })
}






$(document).ready(function() {
    gallery()
    gallery2()
    gallery3()
    sliderCatalog()
    sliderCatalog2()
    sliderCatalogGallery()


    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header").toggleClass("header--active")
        $(".nav").toggleClass("nav--active")
        $("body").toggleClass("fixed-body")

    })

    $(".blog__btn").click(function() {
        $(this).toggleClass("blog__btn--active")
        $(".blog__hidden").slideToggle()
    })

    $(".qa__item-show").click(function() {
        $(this).siblings(".qa__item-hidden").slideToggle()
    })

    $(".catalog-scheme__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".catalog-scheme__tab").removeClass('catalog-scheme__tab--active')
        $(this).addClass('catalog-scheme__tab--active')
        console.log(path)
        $(".catalog-scheme__content").removeClass("catalog-scheme__content--active")
        $(`.catalog-scheme__content[data-tab-content="${path}"]`).addClass("catalog-scheme__content--active")
        gallery2()
        gallery3()
    })
})