








let test = document.querySelector('.message-wrapper')
let body = document.querySelector('body')

let main = document.querySelector('.m')

$('.button').click(function(e) {
    e.preventDefault();
    test.style.display = 'block'
    document.body.style.opacity = 0.9
    $('.message-wrapper').fadeIn(900);
    body.style.overflow = 'hidden'
    main.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: grey;
        top: 0;
        left: 0;
        opacity: 0.4;
    `
})

let main2 = document.querySelector('.m')



$(".m").click(function(e){
    $('.message-wrapper').fadeOut(900);
    $('.m').fadeOut(900);
    $('html').removeClass('noScroll')
})








