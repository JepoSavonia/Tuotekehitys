$(document).ready(function(){
	var menuH = $(window).height() - 200;// - $(.bannerCon).height();
	$('.menuConWide').css('height', menuH);
	$('.contentCon').css('min-height', menuH);
	
	
	
	
	var data = '{ "ilmoitukset" : [' +
'{ "otsikko":"Yhtiökokous" , "pvm":"12.12.2017", "id":1 },' +
'{ "otsikko":"Putkiremontti" , "pvm":"1.10.2017", "id":2 },' +
'{ "otsikko":"Syystalkoot" , "pvm":"4.8.2017", "id":3 } ]}';

var asukasData = '{ "ilmoitukset" : [' +
'{ "otsikko":"Lenkkikaveria" , "pvm":"12.12.2017", "id":1 },' +
'{ "otsikko":"Talkoo asiaa" , "pvm":"1.10.2017", "id":2 },' +
'{ "otsikko":"Lampunvaihtoon apua?" , "pvm":"4.8.2017", "id":3 } ]}';

var omaData = '{"ilmoitukset" : [' +
'{ "otsikko":"Koiravahtia vk 48" , "pvm":"12.12.2017", "id":1 }]' +
'}';

	var varausData = '{ "varaukset" : [' +
'{ "kohde":"Pyykkikone" , "pvm":"12.12.2017", "aika":"17.00-18.00", "id":1 },'+
'{ "kohde":"Kuivaushuone" , "pvm":"12.12.2017", "aika":"18.00-19.00", "id":2 }]}';



var varaukset = JSON.parse(varausData);
var asIlm = JSON.parse(asukasData);
var ilmoitukset = JSON.parse(data);
var omatIlmoitukset = JSON.parse(omaData);

for(var i = 0; i< ilmoitukset.ilmoitukset.length; i++){
	$('.etuTaloIlmCon').append("<div class='ilmoitus' id='Ilm"+ ilmoitukset.ilmoitukset[i].id + "'><span>"+ ilmoitukset.ilmoitukset[i].otsikko + "</span><span class='date'>"+ ilmoitukset.ilmoitukset[i].pvm + "</span></div>");
	$('.taloIlmCon').append("<div class='ilmoitus' id='Ilm"+ ilmoitukset.ilmoitukset[i].id + "'><span>"+ ilmoitukset.ilmoitukset[i].otsikko + "</span><span class='date'>"+ ilmoitukset.ilmoitukset[i].pvm + "</span></div>");
		
	}
	
for(var i = 0; i< omatIlmoitukset.ilmoitukset.length; i++){
	$('.etuOmaIlmCon').append("<div class='ilmoitus' id='OIlm"+ omatIlmoitukset.ilmoitukset[i].id + "'><span>"+ omatIlmoitukset.ilmoitukset[i].otsikko + "</span><span class='date'>"+ omatIlmoitukset.ilmoitukset[i].pvm + "</span></div>");
	//$('.asukasIlm').append("<div class='ilmoitus' id='AIlm"+ omatIlmoitukset.muut[i].id + "'><span>"+ omatIlmoitukset.muut[i].otsikko + "</span><span class='date'>"+ omatIlmoitukset.muut[i].pvm + "</span></div>");
	}
	

	
for(var i = 0; i< varaukset.varaukset.length; i++){
	$('.etuOmaVarCon').append("<div class='ilmoitus' id='Var"+ varaukset.varaukset[i].id + "'><span>"+ varaukset.varaukset[i].kohde + " "+ varaukset.varaukset[i].aika  +" "+ varaukset.varaukset[i].pvm  +"</span></div>");
	}
	
	$(window).scroll(function(){
		var menuOffSet = 200;
		if($(window).scrollTop() >= menuOffSet)
		{
			$('.menuConWide').addClass('stickyMenu');
		}
		else if($(window).scrollTop() < menuOffSet)
		{
			$('.menuConWide').removeClass('stickyMenu');
		}
	});
	
	// sivujen hallinta
	
	// Varaus sivu
	$(".varaukset").on("click",function() {
		$(".contentCon").load("Varaukset.html", function(){
			checkScrollBar();
		});
	});

	// Ilmoitus sivu
	$(".ilmoitukset").on("click",function() {
		$(".contentCon").load("Ilmoitukset.html", function(){
			checkScrollBar();
		});
	});
	
	// Ilmoitussivu vällehti
	$(".taloyhtioilmoitukset").on("click",function() {
		$(".contentCon").load("Ilmoitukset.html", function(){
			checkScrollBar();
		});
	});
	
	// Asukasilmoitukset
	$(".asukasilmoitukset").on("click",function() {
		$(".content-main").load("Asukasilmoitukset.html", function(){
			for(var i = 0; i< asIlm.ilmoitukset.length; i++){
				$('.asukasIlm').append("<div class='ilmoitus' id='AIlm"+ asIlm.ilmoitukset[i].id + "'><span>"+ asIlm.ilmoitukset[i].otsikko + "</span><span class='date'>"+ asIlm.ilmoitukset[i].pvm + "</span></div>");
			}
				
			for(var i = 0; i< omatIlmoitukset.ilmoitukset.length; i++){
			$('.omaIlmCon').append("<div class='ilmoitus' id='OIlm"+ omatIlmoitukset.ilmoitukset[i].id + "'><span>"+ omatIlmoitukset.ilmoitukset[i].otsikko + "</span><span class='date'>"+ omatIlmoitukset.ilmoitukset[i].pvm + "</span></div>");
			}
			checkScrollBar();
		});
		
		
	});

	// Tee vikailmoitus
	$(".teevikailmoitus").on("click",function() {
		$(".content-main").load("Teevikailmoitus.html", function(){
			checkScrollBar();
		});
	});
	
	//varaus
	
	$(".contentCon").on("click", ".table1 td", function() {
		if($(this).html()=="")
		{
			var aika = $(this).siblings('th').html();
			var aika2 = parseInt(aika.substring(0, aika.indexOf(':')));
			aika2++;
			aika = aika + " - " + aika2 + ".00";
			 if(confirm("Varataanko pyykkikone klo. "+ aika) || $(window).width() <= 650)
			 {
				$(this).html("<span class='omaVaraus'>OMA VARAUS</span>");
			 }
		}
	});
	
	$('.contentCon').on('click','.ok', function(){
		$(".popup").addClass('hidden');
		$(".smallpopup").addClass('hidden');
		$(".shadow").addClass('hidden');
	});
	
	$('.weekCalendar').on('click', 'td', function(){
			console.log("varaus");
	
	});
	
	
	$(".saannot").on("click",function() {
		$(".contentCon").load("Saannot.html", function(){
			checkScrollBar();
		});
	});
	
	$(".seuranta").on("click",function() {
		$(".contentCon").load("Seuranta.html", function(){
			checkScrollBar();
			$("#seuranta").removeClass("new");
		});
		
	});
	
	$(".ilmoitus").on("click", function() {
		console.log("123");
		$(".popup").load("Ilmoitus_esimerkki.html", function(){
			$(".popup").removeClass('hidden');
			$(".shadow").removeClass('hidden');
			checkScrollBar();
		});
	});
	
	$('.shadow').on('click', function(){
		$(".popup").addClass('hidden');
		$(".smallpopup").addClass('hidden');
		$(".shadow").addClass('hidden');
	});
	
	$(".varaukset").on("click",function() {
		$(".contentCon").load("Varaukset.html", function(){
			checkScrollBar();
		});
	});
		
	$(".ilmoitusOtsikko").on("click", function(){
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		
	});
	
 $(".faMenu").click(function(){
     if($(".menuContent").css('left') == '-200px'){
       $(".menuContent").stop().animate({left:'0px'},1000);
     };
     if($(".menuContent").css('left') == '0px'){
        $(".menuContent").stop().animate({left:'-200px'},1000);
     };
 });

});

//functions


	
	function checkScrollBar() {
    var hContent = $("body").height(); // get the height of your content
    var hWindow = $(window).height();  // get the height of the visitor's browser window
    // if the height of content is bigger than the height of the browser window, we have a scroll bar
	

    if(hContent>hWindow) { 
        $('.menuConWide').css('height', $(window).height() - 200);
    }
	else{
		$('.menuConWide').css('height', $('.contentCon').height());
	}

}