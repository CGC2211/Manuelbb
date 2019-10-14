
$(document).ready(function(){

  $("#tipodepaciente").change(function(){
  	var valor = $(this).val();
  		switch(valor){
  			case "Normal":
  				$(".normal").css("display","flex");
  				$(".normal").css("width",$('#generales').width() + 9 );

  				$(".Deportista").css("display","none");
  			break;
  			case "Deportista":
  				$(".normal").css("display","none");
  				$(".Deportista").css("display","flex");
  			break;
  			default:
  				$(".normal").hide();
  				$(".Deportista").hide();
  			break;
  		}
  });

});
function searchpaciente(){
      var paciente = $('#inputsearch').val();

      
      $('.element-seguimiento-result').append()
   };