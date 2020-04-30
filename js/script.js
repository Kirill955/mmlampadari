$(function() {
    $('.main__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    })
    /* Modal window */
    let btnModal = $('.header__menu-serviz-text'),
    modalBackground = $('.modal__background'),
    modal = $('.modal'),
    closeModal = $('.modal-close');

    btnModal.on('click', function (event) {
        event.preventDefault()
        modalBackground.addClass('show')

        modalBackground.on('click', function (e) {
            if( !modal.is(e.target) && modalBackground.has(e.target).length === 0 
            || e.target == closeModal){
                modalBackground.removeClass('show');
            } else {}
        });
    });
})