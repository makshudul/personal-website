$('.owl-theme').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    stagePadding: 10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})
