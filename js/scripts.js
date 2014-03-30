var pages = new Array();

$( document ).ready(function() {
 $('#changecolorr').click(function() {
              $("#colorexpert").css("background-color","#fd6260");
              $("#bloc-tt").css("background-color","#fd6260");

          });
});


$( document ).ready(function() {
 $('#changecoloro').click(function() {
              $("#colorexpert").css("background-color","orange");
              $("#bloc-tt").css("background-color","orange");

          });
});


$( document ).ready(function() {
 $('#changecolorv').click(function() {
              $("#colorexpert").css("background-color","#67cf5c");
              $("#bloc-tt").css("background-color","#67cf5c");

          });
});

$(document).on( 'click', '#navigation-panel span', function(){
	pages.splice( pages.indexOf( $(this).parent().html() ), 1 );
	$(this).parent().remove();
	console.log(pages);

});

$(document).on( 'click', '#navigation-panel div', function(){
	$('#navigation-panel div').not(this).removeClass('active-navigation');
	$(this).addClass('active-navigation');

});

$( document ).ready(function() {
 	$('.content-text a').click(function(event) {
 		event.preventDefault();
 		if( $.inArray($(this).html(), pages) == -1 )
 		{
 			$('#navigation-panel').append('<div>'+ $(this).html() + ' <span>✕</span></div> ');
 			pages.push($(this).html());
 		}
  	});
});

$(document).on( 'click', '.bloc-level div', function(){

	//set Active to level button
	$(this).parent().children().each(function() {
  		$(this).removeClass('bloc-level-active');
	});
	$(this).addClass('bloc-level-active');

	//set color for paragraphe
	
	$(this).parent().parent().children('.bloc-content').removeClass().addClass('bloc-content').addClass($(this).data('level') + '-bloc-content');
	$(this).parent().parent().children('.bloc-title').children('.level-paragraphe').removeClass().addClass('level-paragraphe').addClass('level-paragraphe-' + $(this).data('level'));
	

	//set animation for content
	$(this).parent().parent().children('.bloc-content').fadeOut('fast');


	$(this).parent().parent().children('.bloc-content').fadeIn('slow');

});

$( document ).ready(function() {
	$('.content-media').each(function() {


  		$(this).css('maxHeight',$(this).parent().children('.content-text').css('height'));

  		//get Height of paragraphe and window
  		var HeightParagraphe = $(this).parent().children('.content-text').height();
  		var HeightWindow = $( window ).height();

  		if(HeightParagraphe >= HeightWindow ){
  			$(this).children('.ctn-media').css('maxHeight',Number(HeightWindow) - 90 + 'px');
  		}
  		else{
  			$(this).children('.ctn-media').css('maxHeight',$(this).parent().children('.content-text').css('height').replace(/[^-\d\.]/g, '')-50 + 'px');
  		}
  		
	});
 	
});


$(document).on( 'click', '.panel-media div', function(){
	$(this).parent().parent().children('.ctn-media').children('div').not('.bloc-' + $(this).data('panel')).fadeOut('fast');
	$(this).parent().parent().children('.ctn-media').children('.bloc-' + $(this).data('panel')).fadeIn('slow');
});


$( document ).ready(function() {
	$('.content-media').stickyfloat( {duration: 400} );
});


// ICI, AMBROISE A CODE ! ATTENTION AUX YEUX !
$( document ).ready(function() {
	$('.content-text').each(function() {
		var that = $(this);
		$(this).find('a').each(function(){
			console.log($(this));
			that.parent().children('.content-media').children('.ctn-media').children('.bloc-link').append($('<a></a>').attr('href', $(this)[0]['href']).html($(this)[0]['innerHTML']));
		});
	});
});
