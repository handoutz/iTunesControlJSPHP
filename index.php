<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--border: #262626 solid 2px;-->
<html>
	<head>
		<title>Vince's Frontend for iTunes</title>
		<script src="lib/jquery.js" type="text/javascript"></script>
		<script type="text/javascript" src="lib/iTunesLib.js"></script>
		<link rel="stylesheet" href="style.css" type="text/css"/>
		<link rel="stylesheet" href="shadows.css" type="text/css"/>
	</head>
	<body>
		<div id="Wrapper">
			<div id="CurTrack">
				Now Playing
				<br />
				<span id='TrackText'>&nbsp;</span>
			</div>
			<div id="Content">
				<a href="#" onclick="ButtonPress('prev');return true;"> <img class="btn" src="img/buttons/Rewind.png" /> </a>
				<a href="#" onclick="ButtonPress('play');return true;"> <img class="btn" src="img/buttons/Play.png" /> </a>
				<a href="#" onclick="ButtonPress('next');return true;"> <img class="btn" src="img/buttons/fastforward.png" /> </a>
			</div>
		</div>
		<div id='ShadowBottom'></div>
		<div id="Footer">
			Copyright &copy; Vince Matonis 2011 (just for the hell of it, you know?)
		</div>
		<div id="Floater"></div>
	</body>
</html>