let cntg = true;
let cnty = true;
let cntr = true;
$(document).ready(function(){
  $("#green").click(function(){
    if (cntg) {
      $(this).button("confirm");
      $("#yellow").prop("disabled", true);
      $("#red").prop("disabled", true);
      $(".done").prop("disabled", true);
      cntg = false;
    }
    else {
      $(this).button("reset");
      $("#yellow").prop("disabled", false);
      $("#red").prop("disabled", false);
      $(".done").prop("disabled", false);
      cntg = true;
    }
  });  
  $("#yellow").click(function(){
    if (cnty) {
      $(this).button("confirm");
      $("#green").prop("disabled", true);
      $("#red").prop("disabled", true);
      $(".done").prop("disabled", true);
      cnty = false;
    }
    else {
      $(this).button("reset");
      $("#green").prop("disabled", false);
      $("#red").prop("disabled", false);
      $(".done").prop("disabled", false);
      cnty = true;
    }
  });
  $("#red").click(function(){
    if (cntr) {
      $(this).button("confirm");
      $("#yellow").prop("disabled", true);
      $("#green").prop("disabled", true);
      $(".done").prop("disabled", true);
      cntr = false;
    }
    else {
      $(this).button("reset");
      $("#yellow").prop("disabled", false);
      $("#green").prop("disabled", false);
      $(".done").prop("disabled", false);
      cntr = true;
    }
  });  
})