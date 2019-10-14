
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

function generargrafica(){

  var dataArray = new Array();
  var dataLabels = new Array();
  var contador = 0;
    $('.Peso').each(function(){
      dataArray.push($(this).text());
      contador++;
      dataLabels.push(contador);
      //check if data-layer already processed
      /*if(!dataArray.indexOf(dataLayer))
      {
         //update data array
         dataArray.push(dataLayer);
         $('.popupDiv[data-layer="'+ dataLayer +'"]').each(function(){
            //do your stuff here
         });
      }*/
    });
    
    var ctx = document.getElementById('myChart');

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
                datasets: [{
                  data: dataArray
                }],
                labels: dataLabels
              },
        options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Seguimiento de Peso' 
                  },
            legend: {
                display: false
              }
            }
    });
}   

function generarpdf(){
   var doc = new jsPDF();
   var canvas = document.getElementById('myChart');
   var imgData = canvas.toDataURL("image/PNG", 1.0);
   var elementHTML = $('#Seguimiento').html();
   var specialElementHandlres = {
    '#elementH': function(element, renderer){
      return true;
    }
   }

   doc.fromHTML(elementHTML, 15, 15,{
      'width': 170,
      'elementHandlers': specialElementHandlres
   });
   doc.addImage(imgData, 'JPEG', 10, 0);

   doc.save('paciente.pdf');
}