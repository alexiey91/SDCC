$(".tabellone td").click(function(){
  //alert("tabellone"+this.id);
  //console.log("hey",this.id,this.id=="");
  if(this.id != ""){
    $('#textModal').prop('innerHTML',this.id);
    $('#tempModalQuote').prop('innerHTML',0);
  }
});

$(".modal-fiches").click(function(){

  var tempSum = parseInt($('#tempModalQuote').prop('innerHTML'))+parseInt(this.value);
  if(tempSum<0)
    tempSum=0;
  $('#tempModalQuote').prop('innerHTML',tempSum);
});

$(".modal-fiches-confirm").click(function(){

  var tempSum = parseInt($('#tempModalQuote').prop('innerHTML'));
  var totalBet;
  /*if($.isNumeric($('#totalBet').prop('innerHTML'))){
    totalBet=parseInt($('#totalBet').prop('innerHTML'));
  }else {
    totalBet=0;
  }*/
  if(tempSum != 0){

    $('#confirmBetText').prop('innerHTML',"Confirm?   ");
    $('#confirmBet').prop('hidden',false);
    $('#puntata').prop('innerHTML'," euro on "+$('#textModal').prop('innerHTML'));
    $('#totalBet').prop('innerHTML',$('#tempModalQuote').prop('innerHTML'));
    $('#totalBet').prev().prop('innerHTML',"Did you bet ");
  }
});

$('#confirmBet').click(function(){

  $('.tabellone tr').each(function(){
    //console.log($(this).attr('data-target'));
    if($(this).attr('data-target')=="#modale-puntata")
      $(this).attr('data-target',null);
  });
  $('#1st12').attr('data-target',null);
  $('#2nd12').attr('data-target',null);
  $('#3rd12').attr('data-target',null);
  $('.tabellone').css('opacity',0.5);

 setTimeout(function(){
   console.log("+-+-+-+-timeout-+-+-+-+")
   $('.tabellone tr').each(function(){
     console.log($(this).attr('data-target'));
     if($(this).attr('data-toggle')!=null)
       $(this).attr('data-target',"#modale-puntata");
   });
   $('#1st12').attr('data-target',"#modale-puntata");
   $('#2nd12').attr('data-target',"#modale-puntata");
   $('#3rd12').attr('data-target',"#modale-puntata");
   $('.tabellone').css('opacity',1);
 },10000);


});
