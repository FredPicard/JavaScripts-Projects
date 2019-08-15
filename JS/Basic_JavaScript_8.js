// concatonate method

function this_function() {
var this_con = "my dog ";
var that_con = "is a cocker";
var the_con = "-spaniel ";
var other_con = " named Henri";
var my_dog = this_con.concat(that_con, the_con, other_con);
document.getElementById("Henri").innerHTML = my_dog;
} 
// concatonate method end

// string method
function x() {

var str = "Moe, Larry and Curly";
var res = str.slice(5,10);
document.getElementById("string_method").innerHTML = res;
}
// string method end

// Upper case converted string
function y() {
    var text = document.getElementById("upper_case").innerHTML;
    document.getElementById("upper_case").innerHTML = text.toUpperCase();
}
// Upper case converted string end

// String search method
function p() {
var str = "Lets find where 'where' begins";
var pos = str.search("where");
document.getElementById("search_method").innerHTML = pos;
}
// String search method end

// String number 
 function v() {
     var s = 565;
     document.getElementById("N_2_S").innerHTML = s.toString();
 }
//  String number end

// Precision method
function A() {
    var B = 2.4565436786;
    document.getElementById("length").innerHTML = B.toPrecision(8);
}
// Precision Method end

// ToFixed method
function f() {
  var q = 7.45638;
  var l = q.toFixed(1);
  document.getElementById("to_Fixed").innerHTML = l;
}
// ToFixed method end

// ValueOf method
function G() {
    var E = "Ziddy Zaddy Bop!";
    var H = E.valueOf();
    document.getElementById("v_O").innerHTML = H;
}
// ValueOf method end

