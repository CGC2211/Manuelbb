

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
  var canvas = document.getElementById('myChart');
  var doc = new jsPDF('landscape','mm','letter');

  var headersd = [];
  $('.tabla-head').each(function(){
    headersd.push($(this).text());
  });

 console.log($('.Peso').length);
  var contador = 1;
  var datos = [];
  var datosporcolumna = [];
  /*$('.tabla-row').each(function(){
    if(contador <=4){
      datosporcolumna.push($(this).text());
      contador++;
    }
    if(contador == 4){
      datos.push(datosporcolumna);
      datosporcolumna = [];
      contador = 0;
    }
  });*/


    for(contador = 1; contador <= $('.Peso').length; contador++){
      var clase =   'valor-'+contador;
      console.log( "loselementos " + clase + " " +  $('.'+clase).length);
        $('.'+clase).each(function(){
          datosporcolumna.push($(this).text());
      })
        datos.push(datosporcolumna);
        datosporcolumna = [];
    }
    console.log(datos);
   var header = function (data) {
                    doc.setFontSize(18);
                    doc.setTextColor(40);
                    doc.setFontStyle('normal');
//doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
                    doc.text("Testing Report", data.settings.margin.left, 50);
                };

  console.log(headersd);
  console.log(datos);
    doc.autoTable(
         headersd,
         datos,
         {
          margin: {top: 80}, 
          didDrawPage : header,
           theme: 'grid',
            styles: {
                fontSize: 6,
                font: 'PTSans'
            },
        }
    );

    var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getSeconds();
    var imgData = canvas.toDataURL("image/PNG", 1.0);
    doc.addPage();
    doc.addImage(imgData, 'JPEG', 10, 0);
    doc.save('paciente'+date+ '.pdf');
  /*var elem = document.getElementsByClassName("element-seguimiento-result");
  var res = doc.autoTableHtmlToJson(elem);
  var imgData = canvas.toDataURL("image/PNG", 1.0);
  doc.autoTable(res.columns, res.data);
  doc.addPage();
  doc.addImage(imgData, 'JPEG', 10, 0);

   doc.save('paciente.pdf');*/
}

/*var doc = new jsPDF('landscape');
   source = $('.element-seguimiento-result')[0];
   var canvas = document.getElementById('myChart');
   var imgData = canvas.toDataURL("image/PNG", 1.0);
   var elementHTML = $('#Seguimiento').html();
   var specialElementHandlres = {
    '#elementH': function(element, renderer){
      return true;
    }
   };
   var margins = {
                top: 80,
                bottom: 60,
                left: 40,
                width: 522
            };

   doc.fromHTML(source,
        margins.left, // x coord
        margins.top, {// y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlres
   });
   doc.addPage();
   doc.addImage(imgData, 'JPEG', 10, 0);

   doc.save('paciente.pdf');*/

function genpdf(){
 html2canvas(document.getElementById('Seguimiento')).then(function(canvas) {
                var img = canvas.toDataURL('image/png');
                var doc = new jsPDF();
                doc.addImage(img, 'JPEG', 0, 0);
                doc.save('test.pdf');
            });
}