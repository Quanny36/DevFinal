var correct;
$(go);
function go () {
  
  correct = 0;
  $('#success').hide();
  $("#correct").hide();
  
 // Make even and odd cards draggable
 var odds =  $(".odd").draggable().data('type', 1);
 var evens = $(".even").draggable().data('type', 2);
  
  //Handles even cards being dropped
   $( ".evensPlace" ).data('type', 2).droppable({
      drop: function( event, evens ) {
        $( this )
          .find( "p" )
            .html( "Dropped!" );
        var name = $(this).data('type');
        var n = evens.draggable.data('type');
        
        if(name == n) {
            evens.draggable.draggable('disable');
            $("#correct").show(200);
            $("#correct").fadeOut();
            correct++;
        }
  
        if(correct === 6) {
           $('#success').show();
        }
      }
    });
  
    //Handles odd cards being dropped  
    $( ".oddsPlace" ).data('type', 1).droppable({
      drop: function( event, odds ) {
        $( this )
          .find( "p" )
            .html( "Dropped!" );
        var name = $(this).data('type');
        var n = odds.draggable.data('type');
        
        if(name == n) {
          odds.draggable.draggable('disable');
          $("#correct").show(200);
          $("#correct").fadeOut();
          correct++;
        }
      
        if(correct === 6) {
           $('#success').show();
        }
        
      }
      
    });
   
}