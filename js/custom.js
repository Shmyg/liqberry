// $(document).ready(function() {

  
	
// 	$("body").css("display", "none");

//     $("body").fadeIn(1200);
    
// 	$("a.transition").click(function(event){
// 		event.preventDefault();
// 		linkLocation = this.href;
// 		$("html").fadeOut(8000, redirectPage);		
// 	});
		
// 	function redirectPage() {
// 		window.location = linkLocation;
// 	}



$(document).ready(function() {
  // После загрузки страницы сразу делаем её прозрачной.
  $('body').css({'opacity': '0'});
  // И сразуже плавно делаем её видимой.
  // Тем самым делаем эффект появляения страницы.
  $("body").animate({
      opacity: 1
    }, 500);
 
  // При нажатии на любую ссылку.
  $('a').click(function(event) {
    // Проверяем что за ссылка. В данном случае анимация перехода сработает
    // когда у ссылки не будет:
    //   - аттрибута target, чтобы при нажатии на внешнии ссылки сайт не 
    //     становился прозрачным.
    //   - окончания png и jpg, иначе сайт опять же затемнится и ничего не видно.
    //   - # и admin/ чтобы работали Drupal админка в overlay, а также
    //     контекстуальные ссылки. 
    if (!$(this).attr('target') && $(this).attr('href').search('png') == -1 && $(this).attr('href').search('jpg') == -1 && $(this).attr('href')!="#" && $(this).attr('href').search('admin/') == -1) {
      // Отключаем для браузера событие о необходимости перехода по ссылке.
      event.preventDefault();
      // Берем адрес ссылки куда должны были перейти.
      var url = $(this).attr('href')
      // Выполняем затухание.
      $("body").animate({
        opacity: 0
      }, 500, function() {
        // После окончания затухания переадресовываем на тот адрес.
        window.location.href = url;
      })
    }   
  })
});

	
// });
