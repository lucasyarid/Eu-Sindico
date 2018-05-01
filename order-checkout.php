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
<header id="content-header" class="white">
	<div class="container d-flex justify-content-between align-items-center">
		<div id="menu-control" class="open-menu-control">
			<span></span>
		</div>
		<h3>Criar novo pedido</h3>
		<div id="notification-trigger" class="notification"></div>
	</div>
</header>
<section id="order" class="service">
	<main>
		<div class="container" style="display: none !important;">
			<div class="step1">
				<div class="form-row">
					<div class="col-md-4 mb-1 mt-5 ml-3 mr-3">
						<label for="want-buy" class="mb-0"><h2>O que deve ser comprado?</h2></label>
						<input type="text" class="form-control" id="want-buy" placeholder="Exemplo: guarda-sóis" />
					</div>
				</div>
			</div>
		</div>
		<div class="container" style="display: none !important;">
			<div class="step2">
				<div class="form-row">
					<div class="col-md-6 mb-4 mt-1">
						<label for="company-name" class="mb-0">O que deve ser comprado?</label>
						<input type="text" class="form-control" id="company-name" placeholder="Exemplo: guarda-sóis" required>
					</div>
				</div>
				<div class="form-row">
					<div class="col-md-6 mb-4 mt-1">
						<label for="company-phone" class="mb-0">Explique os motivos</label>
						<textarea type="text" class="form-control" id="company-phone" placeholder="Exemplo: Nossos guarda-sóis estão todos furados e não podem ser utilizados. Uma pena para todos!"></textarea>
					</div>
				</div>
				<div class="form-row">
					<div class="col-md-4 mb-4 mt-1">
						<label for="order-time" class="mb-0">Quantidade</label>
						<input type="text" class="form-control" id="order-time" value="" required>
					</div>
					<div class="col-md-4 mb-4 mt-1">
						<label for="order-cost" class="mb-0">Prazo</label>
						<input type="text" class="form-control" id="order-cost" value="" required>
					</div>
				</div>
				<div class="form-row">
					<div class="col-md-2 mb-1 mt-3 fileupload">
						<div class="row no-gutters">
							<div class="col-auto p-0 m-0">
								<h4 class="pr-3">Adicione Anexos</h4>
							</div>
							<div class="col">
								<div id="progress-bar" class="progress">
									<div class="progress-bar progress-bar-striped bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
								</div>
							</div>
						</div>
						<span class="btn btn-camera fileinput-button">
							<i class="fa fa-camera"></i>
							<input type="file" name="files[]" multiple="">
						</span>
						<span class="btn btn-attachment fileinput-button">
							<i class="fa fa-paperclip"></i>
							<input type="file" name="files[]" multiple="">
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="container" style="display: none !important;">
			<div class="step3">
				<div class="form-row">
					<div class="col-md-4 mb-1 mt-3 ml-1 mr-1">
						<label for="want-buy" class="mb-0"><h2>Qual o custo máximo sugerido?</h2></label>
						
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple">+ R$500</button></p>
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple">+ R$100</button></p>
						
						<p class="mt-3"><span>R$</span><input type="text" class="form-control" id="want-buy" placeholder="00" /><span>,00</span></p>
						
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple">- R$100</button></p>
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple">- R$500</button></p>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="step1">
				<div class="form-row">
					<div class="col-md-4 mb-1 mt-5 ml-3 mr-3">
						<label for="want-buy" class="mb-0"><h2>Qual é o tipo de serviço?</h2></label>
						
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple btn-block">Pintura</button></p>
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple btn-block">Laudo</button></p>
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple btn-block">Limpeza</button></p>
						<p class="mt-3"><button type="button" class="btn btn-rounded btn-md btn-outline-simple btn-block">Outro tipo</button></p>
						<p class="type pt-2 pb-2">
							<label for="order-time" class="mb-0">Defina o tipo </label>
							<input type="text" class="form-control pt-0" id="want-buy" placeholder='Ex.: "Segurança"' />
						</p>
						
						
					</div>
				</div>
			</div>
		</div>
	</main>
	<footer>
		<div class="container">
			<div class="d-flex justify-content-center">
				<button type="button" class="btn btn-success btn-rounded btn-lg btn-block">Prosseguir ›</button>
			</div>
		</div>
	</footer>
</section>