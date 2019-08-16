function Call_Loop() {
    var x = "";
    var y = 0;
    while (y < 30) {
        x += "<br>the Number is  " + y;
        y++;
    }
    document.getElementById("Loop").innerHTML = x;
}
// For Loop end

// String Length Property
function S() {
    var T = "shama lama ding dong";
    var R = T.length;
    document.getElementById("String_Length").innerHTML = R;
}
// String length end

// For Loop
 
     var dogs = ["Cocker Spaniel", "Sihtzu", "Chihuahua", "Great Dane", "Mutt"];
     var pups = "";
     var y;
     function for_Loop() {
     for (y = 0; y < dogs.length; y++) {
        pups += dogs[y] + "<br>";
     }
     document.getElementById("List_of_Dogs").innerHTML = pups;
     
 }
// ForLoop end

// Array function
function array_function() {
    var Apple_Jack = [];
    Apple_Jack[0] = "playing";
    Apple_Jack[1] = "barking";
    Apple_Jack[2] = "eating";
    Apple_Jack[3] = "scratching";
    Apple_Jack[4] = "beg";
    document.getElementById("Array").innerHTML = "My dog AppleJack likes to " + Apple_Jack[4]
+ " for food!";
}
// Array function end

// Constant
 function constant_function() {
    const A_J = {type:"dog", breed:"shichon", color:"white", weight:"10 lbs"};
     A_J.color = "white with tan spots"
     A_J.age = "11";
     A_J.fur = "long hair";
     document.getElementById("Constant").innerHTML = "AJ is a " +
        A_J.type + " who is " +  A_J.age + " years old today, she is a "  +  A_J.fur + " and who's color is " + A_J.color;
 }
//  Constant end

// Let Keyword
var A = 30;
function B() {

    let A = 45;
document.getElementById("Let").innerHTML = A;
    
}
//  Let keyword end
 function myFunction(name) {
     return "Hello " + name;
   }
 document.getElementById("demo").innerHTML = myFunction("John");
// Return function

// Creating an Object with Let

  let house = {   
      style: "craftsmen ",
     color: "brown and tan ",
     year: "1924 ",
     size: "2600 sq ft ",
      description : function() {
          return "This house is a " + this.year + this.style + this.size + this.color;
     }
    
  };
  document.getElementById("House_Object").innerHTML = house.description();
// Creating an Object with Let end

// Break statement
var M = "";
var i;
for (i = 0; i < 20; i++) {
    if (i === 5) { break; }
    M += "The numer is " + i + "<br>";
}
document.getElementById("Break").innerHTML = M;
// Break Statement end

// Continue Statement
 var P = "";
 var Q;
 for (Q = 0; Q < 17; Q++) {
     if (Q === 9) {continue; }
     P += "The number is " + Q + "<br>";
 }
 document.getElementById("Continue").innerHTML = P;