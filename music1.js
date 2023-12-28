alert("Welcome to music Directory by Harsh ❤️");

let navbar = document.querySelector('.navbar');
document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}

$(document).ready(function(){
    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('gallery .image').show(200);
        }
        else{
            $('gallery .image').not('.' +filter).hide(100);
            $('gallery .image').filter('.' +filter).hide(100);
        }
    });

    $('.gallery').manificPopup({
        delegate: 'a',
        type:'image',
        gallery:{
            enabled:true,
        }
    });

});