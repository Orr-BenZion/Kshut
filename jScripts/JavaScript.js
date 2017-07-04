function changeTab(str) {
    $('.single-tab').removeClass('show');
    $('.single-tab').addClass('hide');
    $('#' + str).addClass('show');
    
    $('html, body').animate({
        scrollTop: $('#tabs').offset().top
    }, 500);
}

function animateToContent(str) {
    if (str === undefined || str == '') {
        str = "jumper";
    }

    $('html, body').animate({
        scrollTop: $('#'+str).offset().top
    }, 500);

    setTimeout(function () { $('#' + str).focus(); }, 500)
    
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
}

function topFunction() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
}