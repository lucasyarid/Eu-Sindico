<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="assets/libraries/bootstrap/4.0.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/libraries/normalize/8.0.0/normalize.min.css">
	<link rel="stylesheet" href="assets/libraries/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/libraries/swiper/4.2.0/css/swiper.min.css">
	<link rel="stylesheet" href="assets/libraries/blueimp-file-upload/9.21.0/css/jquery.fileupload.min.css" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800">
	<link rel="stylesheet" href="assets/css/style.css">
	<title>Eu Síndico</title>
	<meta name="description" content="" />
</head>
<body>
	<div id="gallery" style="display: none;">
		<header>
			<div class="container-fluid d-flex align-items-center">
				<h3>Guarda-sóis</h3>
				<i class="ml-auto fa fa-close gallery-close"></i>
			</div>
		</header>
		<main class="h-100">
			<div class="swiper-container h-100">
				<div class="swiper-wrapper h-100">
					<div class="swiper-slide">
						<img data-src="//picsum.photos/640/560" class="swiper-lazy">
						<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
					</div>
					<div class="swiper-slide">
						<img data-src="//picsum.photos/320/560" class="swiper-lazy">
						<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
					</div>
					<div class="swiper-slide">
						<img data-src="//picsum.photos/600/560" class="swiper-lazy">
						<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-button-next"></div>
				<div class="swiper-button-prev"></div>
			</div>
		</main>
	</div>
	
	<div id="loading" style="display: none;">
		<div class="sending">
			<div class="box">
				<div class="spinner">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
				<h5>Enviando...</h5>
			</div>
		</div>
		<div class="sended">
			<div class="box">
				<i class="fa fa-check"></i>
				<h5>Enviado!</h5>
			</div>
		</div>
	</div>

	<div class="swiper-container" id="app-container">	
		<div class="swiper-wrapper">
			<div class="swiper-slide menu" id="nav">
				<header style="background-image: url(//picsum.photos/640/480)">
					<div class="container">
						<div class="avatar" style="background-image: url(//api.adorable.io/avatars/64)"></div>
						<p class="house-number">Apartamento 101</p>
					</div>
				</header>
				<nav>
					<div class="container">
						<ul>
							<li><a href="#"><i class="fa fa-home"></i> Inicio</a></li>
							<li><a href="#"><i class="fa fa-folder"></i> Pedidos</a></li>
							<li><a href="#"><i class="fa fa-wpforms"></i> Orçamentos</a></li>
							<li><a href="#"><i class="fa fa-play"></i> Em Progresso</a></li>
							<li><a href="#"><i class="fa fa-check"></i> Concluidos</a></li>
							<li><a href="#"><i class="fa fa-cog"></i> Ajustes</a></li>
							<li><a href="#"><i class="fa fa-info-circle"></i> Sobre nós</a></li>
							<li><a href="#"><i class="fa fa-sign-out"></i> Sair</a></li>
						</ul>
						<div class="new-order"><a href="#" class="btn btn-success btn-lg btn-rounded"><strong>Criar novo pedido</strong></a></div>
					</div>
				</nav>
			</div>
			<div class="swiper-slide content" id="content">
				<?php 
					if(empty($_GET['page'])) {
						include('home.php');
					} else {
						include($_GET['page'].'.php');
					}
				?>
				<div class="swiper-scrollbar"></div>
			</div>
		</div>
	</div>

	<script src="assets/libraries/jquery/3.3.1/jquery.min.js"></script>
	<script src="assets/libraries/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script src="assets/libraries/popper.js/1.14.0/popper.min.js"></script>
	<script src="assets/libraries/swiper/4.2.0/js/swiper.min.js"></script>
	<script src="assets/libraries/blueimp-file-upload/9.21.0/js/vendor/jquery.ui.widget.min.js"></script>
	<script src="assets/libraries/blueimp-file-upload/9.21.0/js/jquery.fileupload.min.js"></script>
	<script src="assets/libraries/blueimp-file-upload/9.21.0/js/jquery.iframe-transport.min.js"></script>
	<script src="assets/js/scripts.js"></script>
	<script>
	jQuery(document).ready(function($){
		// Menu Trigger
		var menuButton = document.querySelector('#menu-control');
		var swiper = new Swiper('#app-container', {
			slidesPerView: 'auto',
			initialSlide: 1,
			resistanceRatio: 0,
			slideToClickedSlide: true
		});
		$('#menu-control').on('click',function(){
			if($(this).hasClass('open-menu-control')) {
				$(this).removeClass('open-menu-control');
				swiper.slideNext();
			} else {
				$(this).addClass('open-menu-control');
				swiper.slidePrev();
			}
		});
		swiper.on('slideChange', function () {
			if(swiper.activeIndex == 0) {
				$('#menu-control').addClass('open-menu-control');
			} else {
				$('#menu-control').removeClass('open-menu-control');
			}
		});
			
		// Notification Trigger
		$("#notification-trigger").on('click',function(e) {
			e.preventDefault();
			$("#notifications").toggleClass("open");
			$(this).toggleClass("open");
		});	
		
		// Cards Trigger
		var cards_swipe = new Swiper('#app-cards-swipe', {
			slidesPerView: 'auto',
			spaceBetween: 15
		});
		
		// Confirmation Trigger
		var confirmation = new Swiper('#app-confirmation', {
			slidesPerView: 'auto',
			spaceBetween: 12
		});
		
		// Gallery Trigger
		$('a.gallery').on('click',function(){
			$('#gallery').fadeIn('fast');
			var gallery = new Swiper('#gallery .swiper-container', {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 0,
				lazy: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		});
		$('#gallery .gallery-close').on('click',function(){
			$('#gallery').fadeOut('fast');
		});
		
		// File Upload Trigger
		$('#fileupload').fileupload({
			autoUpload: true,
			url: '//jquery-file-upload.appspot.com/server/php/',
			dataType: 'json',
			done: function (e, data) {
				$.each(data.result.files, function (index, file) {
					console.log(data.result.files);
					$('<p/>').html('<img src="'+file.thumbnailUrl+'" /> '+file.name).appendTo('.fileupload');
					$('#progress-bar .progress-bar').removeClass('progress-bar-animated');
					
					
				});
			},
			progressall: function (e, data) {
				$('#progress-bar .progress-bar').addClass('progress-bar-animated');
				var progress = parseInt(data.loaded / data.total * 100, 10);
				$('#progress-bar .progress-bar').css(
					'width',
					progress + '%'
				);
			}
		});
	});
	</script>
</body>
</html>