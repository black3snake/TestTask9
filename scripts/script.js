$(document).ready(function () {
    $('.slides__item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    const accord = $("#accordion");
    $( function() {
        let icons = {
            header: "ui-icon-caret-1-s",
            activeHeader: "ui-icon-caret-1-n"
        };
        accord.accordion({
            collapsible: true,
            icons: icons,
            heightStyle: "content"
        });
    } );

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.card-image').magnificPopup({
        type:'image',
    });


    const formBase = $('form.row');
    const form = $('form.row input');

    function thanxForZalaz() {
        let thx = $('.thx');
        $('section.order > h2').text('Спасибо за уделенное время')
        formBase.css('display', 'none');
        if(thx.hasClass('d-none'))
            thx.removeClass('d-none',).addClass('d-block');
    }

    formBase.on('submit', function(e) {
        e.preventDefault();
        const name = form.eq(0).val().trim();
        const lastname = form.eq(1).val().trim();
        const phone = form.eq(2).val().trim();
        const country = form.eq(3).val().trim();
        const index = form.eq(4).val().trim();
        const address = form.eq(5).val().trim();
        if (!name) {
            form.eq(0).addClass('is-invalid')
        } else {
            if (form.eq(0).hasClass('is-invalid')) {
                form.eq(0).removeClass('is-invalid')
            }
        }
        if (!lastname) {
            form.eq(1).addClass('is-invalid')
        } else {
            if (form.eq(1).hasClass('is-invalid')) {
                form.eq(1).removeClass('is-invalid')
            }
        }
        if (!phone) {
            form.eq(2).addClass('is-invalid')
        } else {
            if (form.eq(2).hasClass('is-invalid')) {
                form.eq(2).removeClass('is-invalid')
            }
        }
        if (!country) {
            form.eq(3).addClass('is-invalid')
        } else {
            if (form.eq(3).hasClass('is-invalid')) {
                form.eq(3).removeClass('is-invalid')
            }
        }
        if (!index) {
            form.eq(4).addClass('is-invalid')
        } else {
            if (form.eq(4).hasClass('is-invalid')) {
                form.eq(4).removeClass('is-invalid')
            }
        }
        if (!address) {
            form.eq(5).addClass('is-invalid')
        } else {
            if (form.eq(5).hasClass('is-invalid')) {
                form.eq(5).removeClass('is-invalid')
            }
        }

        if(name && lastname && phone && country && index && address) {
            if(index.length !== 6) {
                form.eq(4).addClass('is-invalid')
                alert('Поле Индекс должно иметь 6 цифр');

            } else {
                console.log('Поля все заполнены');
                if (form.eq(4).hasClass('is-invalid')) {
                    form.eq(4).removeClass('is-invalid')
                }
                thanxForZalaz();
            }
        } else {
            alert('Заполните поля отмеченные красным цветом')
        }
    })

    form.eq(4).on('keydown', function(e) {
        if(!e.ctrlKey && !e.metaKey && !/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Tab') {
            // e.preventDefault();
            return false;
        }
        let maxLength = 5;
        if(this.value.length > maxLength) {
            this.value = this.value.substring(0, maxLength);
        }
    })

    form.eq(0).on('blur', function (e) {
        if (!this.value) {
            form.eq(0).addClass('is-invalid')
        } else {
            if (form.eq(0).hasClass('is-invalid')) {
                form.eq(0).removeClass('is-invalid')
            }
        }
    })
    form.eq(1).on('blur', function (e) {
        if (!this.value) {
            form.eq(1).addClass('is-invalid')
        } else {
            if (form.eq(1).hasClass('is-invalid')) {
                form.eq(1).removeClass('is-invalid')
            }
        }
    })
    form.eq(2).on('blur', function (e) {
        if (!this.value) {
            form.eq(2).addClass('is-invalid')
        } else {
            if (form.eq(2).hasClass('is-invalid')) {
                form.eq(2).removeClass('is-invalid')
            }
        }
    })
    form.eq(3).on('blur', function (e) {
        if (!this.value) {
            form.eq(3).addClass('is-invalid')
        } else {
            if (form.eq(3).hasClass('is-invalid')) {
                form.eq(3).removeClass('is-invalid')
            }
        }
    })
    form.eq(4).on('blur', function (e) {
        this.value = this.value.substring(0, 6);
        if(!this.value) {
            form.eq(4).addClass('is-invalid')
        } else {
            if (form.eq(4).hasClass('is-invalid')) {
                form.eq(4).removeClass('is-invalid')
            }
        }
    })
    form.eq(5).on('blur', function (e) {
        if (!this.value) {
            form.eq(5).addClass('is-invalid')
        } else {
            if (form.eq(5).hasClass('is-invalid')) {
                form.eq(5).removeClass('is-invalid')
            }
        }
    })


});
