$(document).ready(function (){
/*
    function showModal(trigger,padlojka, modal){
        $(trigger).on('click', function (){
            $(padlojka).fadeToggle('slow', 0, function (){
                $(modal).show('slow');
            });
        });
    }
    function hideModal(trigger, padlojka, modal){
        $(trigger).on('click', function (){
            $(padlojka).fadeToggle('slow', 0, function (){
                $(modal).hide('slow');
            });
         });
    }

    showModal('.main_btna', '.overlay', '.modal');
    showModal('.main_btn', '.overlay', '.modal');
    showModal("ul li:first", '.overlay', '.modal');

    hideModal('.close', '.overlay', '.modal');  */

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });gt
});
