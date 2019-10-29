$(document).ready(function() {
  $("form#solve").submit(function() {
    $("#finde").hide();
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var letters = sentence.split("");

    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

    // for (i=0; i<letters.length; i += 1) {
    //   if (vowels.includes(letters[i])) {
    //     letters[i] = "-";
    //
    //     $("#output").text(letters.join(""));
    //   }
    // };

    var array = letters.map(function(letter) {
      if (vowels.includes(letter)) {
        return letter = "-";
      } else {
        return letter;
      }
    });
      $("#output").text(array.join(""));

      // console.log(array.join(""));
      // console.log(letters);
      // console.log(array);

  });
});
