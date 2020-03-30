$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var flavors = ["flavor1", "flavor2", "flavor3", "flavor4", "flavor5"];
    flavors.forEach(function(flavor) {
      var userFlavors = $("input#" + flavor).val();
      console.log(userFlavors);
      $(".result").append("<li class='" + flavor + "'>" + userFlavors + "</li>");
    });
    $(".userFavorites").show();
  });
});