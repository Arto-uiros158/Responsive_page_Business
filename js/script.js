jQuery(document).ready(function($) {

	/* Image-background (ibg) */
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	/* Адаптивное меню (бургер) */
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active'); // открываем/закрываем меню
		$('body').toggleClass('lock');
		// не даем странице прокручиваться при открытом меню
	});

	/* Табы */
	var tab = $('.tab');

	tab.on('click', function(event) {
		event.preventDefault();

		$('.active').removeClass('active');
		$(this).toggleClass('active');

		var target = $(this).attr('href');

		if (target == '#all') {
			$(target).children('.news-media__column').toggleClass('active');
		} else {
			$(target).toggleClass('active');
		}
	});

	/* Map */
	function map(){
		var markers = new Array();
		var locations = [
			[new google.maps.LatLng(51.442828, 10.382831)],
			[new google.maps.LatLng(40.088090, -3.281372)],
			[new google.maps.LatLng(43.365236, 12.419072)],
			[new google.maps.LatLng(61.526705, 10.138005)],
			[new google.maps.LatLng(66.311060, 19.556970)],
		]
		var options = {
			zoom: 3,
			panControl:false,
			mapTypeControl:false,
			center: locations[0][0],
			styles:[{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#9fcfeb"}]}],
			scrollwheel:false,
		}; 
		var map = new google.maps.Map(document.getElementById('map'), options);
		var icon={
			url:'img/map/map-marker.svg',
			scaledSize: new google.maps.Size(24, 29),
			anchor: new google.maps.Point(12, 29)
		}
		for (var i = 0; i < locations.length; i++) {
			var marker = new google.maps.Marker({
				icon:icon,
				position: locations[i][0],
				map: map,
			});

			markers.push(marker);
		}
	}
	if($("#map").length>0){
		map();
	}

});








