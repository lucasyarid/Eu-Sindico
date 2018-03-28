<nav id="notifications">
	<h3>Notificações</h3>
	<ul>
		<li class="active">
			<a href="#" class="d-flex">
				<i class="align-self-center fa fa-exclamation-triangle"></i>
				<span>
					<strong>Nova proposta para analisar</strong>
					<i>Prazo de 5 dias</i>
				</span>
				<time class="ml-auto">1 min</time>
			</a>
		</li>
		<li class="active">
			<a href="#" class="d-flex">
				<i class="align-self-center fa fa-gavel"></i>
				<span>
					<strong>Nova proposta para analisar</strong>
					<i>Prazo de 5 dias</i>
				</span>
				<time class="ml-auto">2d</time>
			</a>
		</li>
		<li class="active">
			<a href="#" class="d-flex">
				<i class="align-self-center fa fa-check"></i>
				<span>
					<strong>Nova proposta para analisar</strong>
					<i>Prazo de 5 dias</i>
				</span>
				<time class="ml-auto">2d</time>
			</a>
		</li>
		<li class="disable">
			<a href="#" class="d-flex">
				<i class="align-self-center fa fa-times-circle-o"></i>
				<span>
					<strong>Nova proposta para analisar</strong>
					<i>Prazo de 5 dias</i>
				</span>
				<time class="ml-auto">2d</time>
			</a>
		</li>
		<li class="expired">
			<a href="#" class="d-flex">
				<i class="align-self-center fa fa-exclamation-triangle"></i>
				<span>
					<strong>Nova proposta para analisar</strong>
					<i>Prazo de 5 dias</i>
				</span>
				<time class="ml-auto">1 sem</time>
			</a>
		</li>
	</ul>
</nav>
<header id="content-header">
	<div class="container d-flex justify-content-between align-items-center">
		<div id="menu-control">
			<span></span>
		</div>
		<h3>Aprovar Pedido</h3>
		<div id="notification-trigger" class="notification">
			<i class="fa fa-bell"></i><span class="badge badge-pill badge-danger">1</span>
			<div class="notification-circle"></div>
			<div class="notification-close"><i class="fa fa-close"></i></div>
		</div>
	</div>
</header>
<section id="checkout">
	<header id="order-top" style="background-image: url(//picsum.photos/640/560)">
		<div class="info">
			<h4>Guarda-sóis</h4>
			<span class="order-reference align-text-top"><i class="fa fa-user-circle"></i> À pedido do Síndico</span>
			<a href="#" class="gallery"><i class="fa fa-picture-o"></i>02 fotos</a>
		</div>
	</header>
	<main>
		<div class="container" style="display: none !important;">
			<p>Em 3 meses, a licitação da empresa que cuida da segurança irá vencer. Precisamos de novas alternativas para manutenção ou renovação do serviço</p>
			
			<h4>Submetido por</h4>
			<p>Eduardo Fontenele</p>
			
			<ul>
				<li><i class="fa fa-check"></i> Houve vistoria prévia</li>
				<li><a href="#"><i class="fa fa-paperclip"></i> Laudo Empresa XYZ.pdf</a></li>
			</ul>
			
			<h4>Ressalvas</h4>
			<blockquote>
				<p>"Contanto que não seja do mesmo tecido que tínhamos antes, estou de acordo."</p>
				<cite><strong>Renan Altendorf</strong> (conselheiro)</cite>
			</blockquote>
		</div>
		<div class="container">
			<h3>Envie seu orçamento</h3>
			
			<h4>PREENCHA OS DADOS</h4>
			
			<div class="form-row">
				<div class="col-md-4 mb-3">
					<label for="company-name">Nome da Empresa</label>
					<input type="text" class="form-control" id="company-name" value="" required>
				</div>
				<div class="col-md-4 mb-3">
					<label for="company-phone">Telefone</label>
					<input type="text" class="form-control" id="company-phone" value="" required>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6 mb-3">
					<label for="company-site">Site da Empresa</label>
					<input type="text" class="form-control" id="company-site">
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-4 mb-3">
					<label for="order-time">Tempo Estimado</label>
					<input type="text" class="form-control" id="order-time" value="" required>
				</div>
				<div class="col-md-4 mb-3">
					<label for="order-cost">Custo</label>
					<input type="text" class="form-control" id="order-cost" value="" required>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-4 mb-3 fileupload">
					<span class="fileinput-button">
						<i class="fa fa-upload"></i>
						<span>Adicione Anexos</span>
						<input id="fileupload" type="file" name="files[]" multiple>
					</span>
					<div id="progress-bar" class="progress">
						<div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
					</div>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="container">
			<h2 style="display: none !important;">Deseja adicionar ressalvas?</h2>
			<textarea style="display: none !important;">Concordo com o conselheiro e não quero o mesmo tecido d os antigos guarda-sóis. Algo de melhor qualidade!</textarea>
			
			<div class="d-flex justify-content-center" style="display: none !important;">
				<button type="button" class="btn btn-outline-danger btn-lg btn-rounded mr-3">Declinar</button><button type="button" class="btn btn-success btn-rounded btn-lg">Aceitar solicitação</button>
			</div>
			
			<div class="d-flex justify-content-center" style="display: none !important;">
				<button type="button" class="btn btn-success btn-rounded btn-lg btn-block">Prosseguir ›</button>
			</div>
			
			<div class="d-flex justify-content-center">
				<button type="button" class="btn btn-success btn-rounded btn-lg btn-block">Enviar Orçamento</button>
				<span id="timer" class="p60">
					<span class="bird">
						<small>EXPIRA EM</small>
						<time>1 dias</time>
					</span>
					<span class="slice">
						<span class="bar"></span>
						<span class="fill"></span>
					</span>
				</span>
			</div>
		</div>
	</footer>
</section>