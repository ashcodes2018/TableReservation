$(document).ready(function(){
   var tableEl;

  $(".available").click(function(){
    tableEl=$(event.target);
    $("#unit1").css("display","block");
    var table_number=$(event.target).text();
    $(".number-of-table").text(table_number);

  });

  $("#savebutton").click(function(){
    $("#unit1").css("display","none");
    var formNumber = $(".number-of-table").text();
    $(".row:contains(" + formNumber + ")").removeClass("available").addClass("reserved");
    addHoverData();
  });

  $(".close").on("click",function(){
      $("#unit1").css("display","none");
  });
  function addHoverData(){
       var name= $("#custname").val();
       var partyNum= $("#howmany").val();
       tableEl.append('<div class="hoverData"><div>' + name + '</div><div>' + partyNum + '</div></div>');
   }


});
