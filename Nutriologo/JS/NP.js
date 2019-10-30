
let pass = false;

$(document).ready(function(){
  $("#tipodepaciente").change(function(){
  	var paciente = $(this).val();
  		var width = $('#geneales').width();
  		switch(paciente){
  			case "Normal":
  				$(".normal").css("display","flex");
  				$(".normal").css("width",width);

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

  $("#btnsndnormal").click( function(){
	
	validate();

	if ($('.errorclass').length == 0){
		$.ajax({
			type:"POST",
			url:'BasicData.php',
			data:({Nombre: $('#inputnombre').val(),
					Paterno: $('#inputapellidop').val(),
					Materno: $('#inputapellidom').val(),
					Sexo: $('#inputsexo').val(),
					Edad: $('#inputedad').val(),
					Estatura: $('#inputestatura').val(),
					Tipo: $('#tipodepaciente').val() 
				}),
				success: function(data){
					let id = data;
					insertnormal(id);
				}
		});
	}
   
});

function validate(){
	$('#inputnombre').val() == '' ? $('#inputnombre').addClass('errorclass')  : $('#inputnombre').removeClass('errorclass') ;
	$('#inputapellidop').val() == '' ? $('#inputapellidop').addClass('errorclass') : $('#inputapellidop').removeClass('errorclass');
	$('#inputapellidom').val() == '' ? $('#inputapellidom').addClass('errorclass') : $('#inputapellidom').removeClass('errorclass');
	$('#inputsexo').val() == 'default' ? $('#inputsexo').addClass('errorclass') : $('#inputsexo').removeClass('errorclass');
	$('#inputedad').val() == '0' || $('#inputedad').val() == ''  ? $('#inputedad').addClass('errorclass') : $('#inputedad').removeClass('errorclass');
	$('#inputestatura').val() == '0' || $('#inputestatura').val() == ''  ? $('#inputestatura').addClass('errorclass') : $('#inputestatura').removeClass('errorclass') ;
	$('#tipodepaciente').val() == 'default' ? $('#tipodepaciente').addClass('errorclass') : $('#tipodepaciente').removeClass('errorclass');
	
	if($('#tipodepaciente').val() != '' || $('#tipodepaciente').val() != 'default' ){
		switch($('#tipodepaciente').val()){
			case 'Normal':
					$('#inputpeso').val() == '0' || $('#inputpeso').val() == ''  ? $('#inputpeso').addClass('errorclass') : $('#inputpeso').removeClass('errorclass');
					$('#inputcircin').val() == '0' || $('#inputcircin').val() == ''  ? $('#inputcircin').addClass('errorclass') : $('#inputcircin').removeClass('errorclass');
					$('#inputcircad').val() == '0' || $('#inputcircad').val() == ''  ? $('#inputcircad').addClass('errorclass') : $('#inputcircad').removeClass('errorclass');
					$('#inputplibic').val() == '0' || $('#inputplibic').val() == ''  ? $('#inputplibic').addClass('errorclass') : $('#inputplibic').removeClass('errorclass');
					$('#inputplitri').val() == '0' || $('#inputplitri').val() == ''  ? $('#inputplitri').addClass('errorclass') : $('#inputplitri').removeClass('errorclass');
					$('#inputgrabia').val() == '0' || $('#inputgrabia').val() == ''  ? $('#inputgrabia').addClass('errorclass') : $('#inputgrabia').removeClass('errorclass');

		}			
	}
}	

function insertnormal(id){
	$.ajax({
		type:"POST",
		url:'NormalData.php',
		data:({ID: id,
				Peso: $('#inputpeso').val(),
				CirCin: $('#inputcircin').val(),
				CirCad: $('#inputcircad').val(),
				PlieBic: $('#inputplibic').val(),
				PliTri: $('#inputplitri').val(),
				PorGra: $('#inputgrabia').val() 
			}),
			success: function(data){
				console.log(data);
			}
	});
}





});





