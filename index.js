$(document).ready(function(){

	var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	usernames.forEach(function(item){
		url= "https://wind-bow.gomix.me/twitch-api/streams/"+item+"?callback=?";

		$.getJSON(url,function(data){
			
			if(data.stream===null){
				var urlchannel = "https://wind-bow.gomix.me/twitch-api/channels/"+item+"?callback=?";
				$.getJSON(urlchannel,function(data1){
					logo = data1.logo;
					lien = data1.url;
					if(logo==null) logo="data:image/jpeg;base64,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";
					$(".container").append('<div class="Offline"><div class="row"><div class="col-md-4"><img width="70px" height="70px" src="'+logo+'"/></div><div class="div2" class="col-md-4">Offline</div><div class="div3" class="col-md-4"><a href="'+lien+'" target = "_blank" >'+item+'</a></div></div></div>');
				});
			}
			else{
				var urlchannel = "https://wind-bow.gomix.me/twitch-api/channels/"+item+"?callback=?";
				$.getJSON(urlchannel,function(data1){
					statu = data1.status;
					logo = data1.logo;
					lien = data1.url;
					img = '<img style="width:100px; height:100px;"src='+logo+' alt="">';
					$(".container").append('<div class="Online"><div class="row"><div class="col-md-4"><img width="70px" height="70px" src="'+logo+'"/></div><div class="div2" class="col-md-4">'+statu+'</div><div class="div3" class="col-md-4"><a href="'+lien+'" target = "_blank" >'+item+'</a></div></div></div>');
				});
			}

		});
	});
	T=true;
	$('#On').on("click",function(){
		if(T){
		$('.Offline').hide(800);
		$('.Online').show(800);
		$('#On').css("background-color","#db0000");
		$('#On').html("Off");
		T=false;
	}
	else{

		$('.Online').hide(800);
		$('.Offline').show(800);
		$('#On').css("background-color","#7fff00");
		$('#On').html("On");
		T=true;
	}
	});

	$('#All').on("click",function(){
		$('.Online').show(800);
		$('.Offline').show(800);
	});
});
