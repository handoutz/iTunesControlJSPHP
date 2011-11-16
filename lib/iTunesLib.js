$(document).ready(function() {
	Request('active', function(data) {
		ParseJSON(data);
	});
});
function TrueFalseToOnlineOffline(input) {
	var str = input;
	str = str.toString().replace("True", "<span class='t'>Online</span>");
	str = str.toString().replace("False", "<span class='f'>Offline</span>");
	return str;
}

function Request(data, callback) {
	$.ajax({
		url : 'it.php',
		data : {
			'cmd' : data
		},
		success : callback,
		timeout : 2000
	});
}

function ButtonPress(cmd) {
	return Request(cmd, function(data) {
		var ret = ParseJSON(data);
	});
}

var State = {
	'MusicArtist' : '',
	'MusicName' : '',
	'MusicLength' : '',
	'MusicPosition' : '',
	'MusicLengthString' : '',
	'MusicPositionString' : '',
	'LastResult' : '',
	'LastCommand' : ''
};
var AlreadyFiguredStatus = false;
function UpdateUI() {
	$("#TrackText").fadeOut('fast', function() {
		var TrackMash = State['MusicArtist'] + " - " + State['MusicName'];
		$("#TrackText").html(TrackMash);
		$("#TrackText").fadeIn('fast', Dummy);
	});
	if(!AlreadyFiguredStatus) {
		$("#Floater").html(TrueFalseToOnlineOffline(State['LastResult']));
		AlreadyFiguredStatus = true;
	}
}

function ParseJSON(input) {
	var Obj = eval('(' + input + ')');
	State['MusicArtist'] = Obj['CurrentStatus']['artist'][0];
	State['MusicName'] = Obj['CurrentStatus']['name'][0];
	State['MusicLength'] = Obj['CurrentStatus']['length'][0];
	State['MusicPosition'] = Obj['CurrentStatus']['time'][0];
	State['MusicLengthString'] = Obj['CurrentStatus']['lengthStr'][0];
	State['MusicPositionString'] = Obj['CurrentStatus']['timeStr'][0];
	State['LastResult'] = Obj['Values']['result'][0];
	State['LastCommand'] = Obj['InputCommand'];
	UpdateUI();
	return Obj;
}

function Dummy() {
}