$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var numberStoppingAt = parseInt($("input#numberStoppingAt").val());
    var numberCountingBy = parseInt($("input#numberCountingBy").val());

    if (isNaN(numberStoppingAt) || numberStoppingAt <= 0) {
      $("#numberStoppingAt").addClass("has-warning");
    }
    if (isNaN(numberCountingBy) || numberCountingBy <= 0 || numberCountingBy > numberStoppingAt) {
      $("#numberCountingBy").addClass("has-warning");
    }

    for (var index = 0; index <= numberStoppingAt; index += numberCountingBy) {
      console.log(index, numberStoppingAt, numberCountingBy);alert(index);
    }
  });
});
