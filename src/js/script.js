svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  // весь код c jQuery

  $('.button').click(function(){
    $('.popup').addClass('popup--active').removeClass('popup--out');
  })
  
  $('.popup__close').click(function(){
    $('.popup').addClass('popup--out');
  });

  $('.popup').click(function(e){
    var div = $(".popup__inner"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.popup').addClass('popup--out'); // скрываем его
		}
  });
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
