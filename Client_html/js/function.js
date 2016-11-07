$(".tabellone td").click(function(){
  //alert("tabellone"+this.id);
  console.log("hey",this.id,this.id=="");
  if(this.id != ""){
    $('#puntata').prop('innerHTML',"");
    $('#totalBet').prop('innerHTML',"");
    $('#textModal').prop('innerHTML',this.id);
    $('#tempModalQuote').prop('innerHTML',0);
  }
});

$(".modal-fiches").click(function(){

  var tempSum = parseInt($('#tempModalQuote').prop('innerHTML'))+parseInt(this.value);
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
    $('#puntata').prop('innerHTML'," euro sul "+$('#textModal').prop('innerHTML'));
    $('#totalBet').prop('innerHTML',$('#tempModalQuote').prop('innerHTML'));
  }
});
