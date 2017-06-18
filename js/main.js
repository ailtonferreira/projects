$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000
   
});

//Efeito scroll animado
$("ul.navbar-nav > li > a").on("click", function(event){
	event.preventDefault();

	$('ul.navbar-nav li').removeClass('active');
	$(this).parent().addClass('active');

	$("html, body").animate({scrollTop: $(this.hash).offset().top-60}, 1200);
});

$(window).scroll(function(){
	var scrollTopAtual = $(this).scrollTop();

	if (scrollTopAtual > 200) {
		$('#navegacao').addClass('fixed');
	}else{
		$('#navegacao').removeClass('fixed');
	}
})