//  var pets = "My Dogs", Dog1="Lynus", Dog2="Henri", Dog3="AJ";
//  var Dog3 = Dog3.fontcolor("green");
//  var Dog2 = Dog2.fontcolor("blue");
//   var Dog1 = Dog1.fontcolor("red");
//  document.write(Dog2)
//  document.write(Dog1)
//  document.write(Dog3)
//  document.write(3+4)

 $(function() {
    $('body').removeClass('fade-out');
});

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);