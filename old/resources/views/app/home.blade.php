<!doctype html>
	<html lang="pt-BR">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Bootstrap CSS -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet">
		<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">

		<style type="text/css">

		.info-job{
			font-family: 'roboto';
		}

		.bg-darkblue{
			background-color: #130f40;
		}

		.start{
			color: #636e72;
		}
		.start:hover{
			text-shadow: 0 0 20px #16a085;
			color: #16a085;
			transition: 1s;
		}

		.pause{
			color: #636e72;
		}
		.pause:hover{
			text-shadow: 0 0 20px #f1c40f;
			color: #f1c40f;
			transition: 1s;
		}

		.stop{
			color: #636e72;
		}
		.stop:hover{
			text-shadow: 0 0 20px #c0392b;
			color: #c0392b;
			transition: 1s;
		}

		.frame{
			background-color: #f1f2f6;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			height: 80px;
			width: 100%;
			min-width: 155px;
			position: relative;
			box-shadow:
			-7px -7px 20px 0px #fff9,
			-4px -4px 5px 0px #fff9,
			7px 7px 20px 0px #0002,
			4px 4px 5px 0px #0001,
			inset 0px 0px 0px 0px #fff9,
			inset 0px 0px 0px 0px #0001,
			inset 0px 0px 0px 0px #fff9,        inset 0px 0px 0px 0px #0001;
			transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
			border-radius: 10px;
		}

		.btn-player{
			height: 40px;
			width: 40px;
			border-radius: 3px;
			background: #e0e5ec;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			-webkit-tap-highlight-color: rgba(0,0,0,0);
			-webkit-tap-highlight-color: transparent;
			box-shadow:
			-7px -7px 20px 0px #fff9,
			-4px -4px 5px 0px #fff9,
			7px 7px 20px 0px #0002,
			4px 4px 5px 0px #0001;
			transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
			font-size: 20px;
			color: #666;
			text-decoration: none;
		}

		.btn-player:active{
			box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
			-4px -4px 6px 0 rgba(116, 125, 136, .2), 
			inset -4px -4px 6px 0 rgba(255,255,255,.5),
			inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
		}

		@font-face {
			font-family: 'Roboto', sans-serif;
		}

		h1{
			color:#7ed6df;
		}

		.flash-effect {
			overflow: hidden;
			position: relative;
		}
		.flash-effect a {
			z-index: 20;
		}
		.flash-effect:after {
			background: #fff;
			content: "";
			height: 155px;
			left: -75px;
			opacity: 0.5;
			position: absolute;
			top: -50px;
			transform: rotate(35deg);
			transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
			width: 50px;
			z-index: 50;
		}

		.flash-effect:hover:after {
			left: 120%;
			transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
		}

	</style>

	<title>Timesheet</title>
</head>
<body class="bg-darkblue">

	<section class="container-fluid py-5 rounded">
		<h1 class="text-center">Timesheet</h1>
		<a href="https://twitter.com/Dave_Conner" class="btn btn-4"><span>Hover</span></a>

		<div class="row p-4 col">

			<div class="row pt-5">
				<div class="col mx-3 text-center text-secondary"><h3>Time</h3></div>
				<div class="col mx-3 text-center text-secondary"><h3>Tarefas</h3></div>
				<div class="col mx-3 text-center text-secondary"><h3>Clientes</h3></div>
			</div>

			<div class="container m-2 mx-4 col bg-white py-4 shadow rounded">

				<div class="row p-4 col">
					<div class="btn-group-sm text-center" role="group">
						<div class ="frame flash-effect">

							<a href="#" class="btn-player">
								<span><i class="fas fa-play start"></i></span>
							</a>
							<a href="#" class="btn-player">
								<i class="fas fa-pause pause"></i>
							</a>
							<a href="#" class="btn-player">
								<i class="fas fa-stop stop"></i>
							</a>
						</div>
						<div class="info-job my-2 text-secondary">
							<marquee>Essa é uma tarefa referente ao job A</marquee>
						</div>

					</div>
				</div>

			</div> 

			<div class="container m-2 mx-4 col bg-white py-4 shadow rounded">
				<div class="row p-4 col">
					<div class="btn-group-sm text-center" role="group">
						<button type="button" class="btn btn-primary">Left</button>
						<button type="button" class="btn btn-primary">Middle</button>
						<button type="button" class="btn btn-primary">Right</button>
					</div>
				</div>
			</div>

			<div class="container m-2 mx-4 col bg-white py-4 shadow rounded">
				<div class="row p-4 col">
					<div class="btn-group-sm text-center" role="group">
						<button type="button" class="btn btn-primary">Left</button>
						<button type="button" class="btn btn-primary">Middle</button>
						<button type="button" class="btn btn-primary">Right</button>
					</div>
				</div>
			</div>

		</div>

	</section>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>

</body>
</html>