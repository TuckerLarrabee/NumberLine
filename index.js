// $(document).ready(function() {
//     $( "#slider" ).slider()
// })

$(function () {
    $("#number-line").slider({
      range: true,
      min: - 5,
      max: 5,
      values: [-1, 1],
      slide: function (event, ui) {
        $("#amount").val(ui.values[0] + " to " + ui.values[1]);
      },
    });
    $("#amount").val(
        $("#number-line").slider("values", 0) +
        " - " +
        $("#number-line").slider("values", 1)
    );
  });
