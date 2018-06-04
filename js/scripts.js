$(document).ready (function() {
  // var favorInput ["#music", "#city", "#food", "#color"];
  $("#favorites").submit(function(event){
    event.preventDefault();
    var music = $("input#music").val();
    var city = $("input#city").val();
    var food  = $("input#food").val();
    var color = $("input#color").val();
    var userInputs = [music, city, food, color];
    var userArrays = [];

    $("#music-out").text(userInputs[0]);
    $("#city-out").text(userInputs[1]);
    $("#food-out").text(userInputs[2]);

    userArrays.push(userInputs[0]);
    userArrays.push(userInputs[1]);
    userArrays.push(userInputs[2]);

    $(".favorite-list").prepend("<li>" + userArrays.pop() + "</li>");
    $(".favorite-list").prepend("<li>" + userArrays.pop() + "</li>");
    $(".favorite-list").prepend("<li>" + userArrays.pop() + "</li>");




  });










});
