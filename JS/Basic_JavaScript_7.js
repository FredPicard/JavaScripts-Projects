
var z = 45;
function Subtract_numbers_1() {
  document.write(100 - z + "<br>");
  }
function Subtract_numbers_2() {
  document.write(z - 13);
}
Subtract_numbers_1();
Subtract_numbers_2();

function Subtract_numbers_3() {
  var y = 45;
  document.write(100 - y + "<br>");
}
function Subtract_numbers_4() {
  document.write(y - 13);
}
Subtract_numbers_3();
Subtract_numbers_4();

function Subtract_numbers_4() {
  var m = 45;
 console.log(100 - m );
}
function Subtract_numbers_5() {
  console.log(m - 13);
}
Subtract_numbers_4();
Subtract_numbers_5();


function get_Date() {
  alert(new Date().getHours());
 if (new Date().getHours() > 12) {
   document.getElementById("Salute").innerHTML = "Good Afternoon!";
 }
 }

 function get_Time() {
  var hour = new Date().getHours();
  var greeting;
    if (hour < 18) {
      greeting = "Well Good day to ya!";
    } else {
      greeting = "Good Evenin to ya!";
    }
    document.getElementById("Greeting").innerHTML = greeting;
  }

  function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
      Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
      Reply = "It is the afternoon.";

    }
    else {
      Reply = "It is the evening time.";
     }
     document.getElementById("Time_of_day").innerHTML = Reply;
  }






