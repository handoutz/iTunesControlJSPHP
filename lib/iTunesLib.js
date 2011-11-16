var CurrentTrack = {
	'Name': '',
	'Length': ''
};
function iTunesActiveOrNot(){
	Request('active', function(data){
		data = data.toString().replace("True", "<span style='color:green'>Online</span>");
		data = data.toString().replace("False", "<span style='color:red'>Offline</span>");
		$("#Floater").html(data);
	});
}

$(document).ready(function() {
	iTunesActiveOrNot();
	GetTrackDetails();
});
function Request(data, callback) {
	$.ajax({
		url : 'it.php',
		data : {
			'cmd' : data
		},
		success : callback,
		timeout: 2000
	});
}
function ButtonPress(cmd) {
	return Request(cmd, function(data) {
		GetTrackDetails();
	});
}

function UpdateTrackName() {
	Request("status", function(data) {
		$("#CurTrack").fadeOut('fast', function(){
			$("#CurTrack").text(data);
			$("#CurTrack").fadeIn('fast', function(){});
		});
		CurrentTrack['Name'] = data;
	});
}
function GetTrackDetails(){
	UpdateTrackName();
	Request('timeLen', function(data){
		CurrentTrack['Length'] = data;
	});
}
