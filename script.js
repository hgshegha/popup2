


//  import myJson from './jobs.json' assert {type: 'json'};




// myJson.response.results.forEach((item) =>
// {
//     let block = document.querySelector('.message-wrapper');
 
//     block.innerHTML += `
//             <div class="message">
//                 <div class="img"><img src="/aramn3/https___s3.amazonaws.com_appforest_uf_f1669301075946x302729185013369340_al-pacino-scarface.jpg" alt=""></div>
//                 <div class="text-main">
//                     <span id="text1" class="text">${item.category1_text}</span>
//                     <span id="text2" class="text">${item.jobtype1_list_text}</span>
//                     <span id="text3" class="text">${item.location_geographic_address.address}</span>
//                 </div>

//                 <div class="lorem-text">
//                     <span>lorem ipsum just stupit text bruh</span>
//                 </div>

//                 <div class="btns">
//                     <button id="first-btn">Mehr Infos</button>
//                     <button id="second-btn">WhatsApp Bewerbung⚡</button>
//                 </div>
//           </div>
//           <hr>
//     `;
    
//     document.body.append(block);
// });

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




$(".m").click(function(e){
    $('.message-wrapper').fadeOut(900);
    $('.m').fadeOut(900);
    $('html').removeClass('noScroll')
})








