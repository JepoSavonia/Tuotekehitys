$(document).ready(function(){
	var menuH = $(window).height();// - $(.bannerCon).height();
	$('.menuConWide').css('height', menuH);
	$('.contentCon').css('min-height', menuH);
	
	
	
	
	var data = '{ "ilmoitukset" : [' +
'{ "otsikko":"Yhtiökokous" , "pvm":"12.12.2017", "id":1 },' +
'{ "otsikko":"Putkiremontti" , "pvm":"1.10.2017", "id":2 },' +
'{ "otsikko":"Syystalkoot" , "pvm":"4.8.2017", "id":3 } ]}';

	var omaData = '{ "ilmoitukset" : [' +
'{ "otsikko":"Kuka ***** ulisee yöllä" , "pvm":"12.12.2017", "id":1 }]}';

	var varausData = '{ "varaukset" : [' +
'{ "kohde":"Pyykkikone" , "pvm":"12.12.2017", "aika":"17.00-18.00", "id":1 },'+
'{ "kohde":"Kuivaushuone" , "pvm":"12.12.2017", "aika":"18.00-19.00", "id":2 }]}';



var varaukset = JSON.parse(varausData);
var ilmoitukset = JSON.parse(data);
var omatIlmoitukset = JSON.parse(omaData);

for(var i = 0; i< ilmoitukset.ilmoitukset.length; i++){
	$('.etuTaloIlmCon').append("<div class='ilmoitus' id='Ilm"+ ilmoitukset.ilmoitukset[i].id + "'><span>"+ ilmoitukset.ilmoitukset[i].otsikko + "</span><span class='date'>"+ ilmoitukset.ilmoitukset[i].pvm + "</span></div>");
	}
	
for(var i = 0; i< omatIlmoitukset.ilmoitukset.length; i++){
	$('.etuOmaIlmCon').append("<div class='ilmoitus' id='OIlm"+ omatIlmoitukset.ilmoitukset[i].id + "'><span>"+ omatIlmoitukset.ilmoitukset[i].otsikko + "</span><span class='date'>"+ omatIlmoitukset.ilmoitukset[i].pvm + "</span></div>");
	}
	
for(var i = 0; i< varaukset.varaukset.length; i++){
	$('.etuOmaVarCon').append("<div class='ilmoitus' id='Var"+ varaukset.varaukset[i].id + "'><span>"+ varaukset.varaukset[i].kohde + " "+ varaukset.varaukset[i].aika  +" "+ varaukset.varaukset[i].pvm  +"</span></div>");
	}
	
	// sivujen hallinta
	//$("#etusivu").on("click",function() {
	//	$(document).load("Etusivu.html");
	//});
	
	
	$("#ilmoitukset").on("click",function() {
		$(".contentCon").load("Ilmoitukset.html");
	});
	
	$("#saannot").on("click",function() {
		$(".contentCon").load("Saannot.html");
	});
	
	$("#seuranta").on("click",function() {
		$(".contentCon").load("Seuranta.html");
	});
	
	$(".ilmoitus").on("click", function() {
		$(".contentCon").load("Ilmoitus_esimerkki.html");
	});
	
	$("#varaukset").on("click",function() {
		$(".contentCon").load("Varaukset.html");
	});
	

});