$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var schoolInput = $("input#school").val();
    var professionInput = $("input#profession").val();
    var numberInput = $("input#number").val();
    var placeInput = $("input#place").val();
    var dateInput = $("input#date").val();
    var transportationInput = $("input#transportation").val();
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var name2Input = $("input#name2").val();

    $(".name").text(nameInput);
    $(".school").text(schoolInput);
    $(".profession").text(professionInput);
    $(".number").text(numberInput);
    $(".place").text(placeInput);
    $(".date").text(dateInput);
    $(".transportation").text(transportationInput);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".name2").text(name2Input);

    $("#letter").show();

    event.preventDefault();
  });
});
