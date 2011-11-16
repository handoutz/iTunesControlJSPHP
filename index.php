<html>
	<head>
		<title>Vince's Frontend for iTunes</title>
		<script src="lib/jquery.js" type="text/javascript"></script>
		<script type="text/javascript" src="lib/iTunesLib.js"></script>
		<link rel="stylesheet" href="style.css" type="text/css"/>
	</head>
	<body>
		<div id="Wrapper">
			<div id="CurTrack">
				<span id='TrackText'>&nbsp;</span>
			</div>
			<a href="#" onclick="ButtonPress('prev');return true;">
				<img class="btn" src="img/prev.png" />
			</a>
			<a href="#" onclick="ButtonPress('play');return true;">
				<img class="btn" src="img/play.png" />
			</a>
			<a href="#" onclick="ButtonPress('next');return true;">
				<img class="btn" src="img/next.png" />
			</a>
		</div>
		<div id="Floater">
			
		</div>
	</body>
</html>