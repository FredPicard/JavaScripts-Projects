function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height"). value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age"). value;
    Can_vote = (Age >= 18) ? "You can vote,":"You are not old enough to vote,";
    document.getElementById("Vote").innerHTML = Can_vote + " thank you for checking! ";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;   
}

function Dog(Breed, Color, Age, Coat) {
    this.Breed = Breed;
    this.Color = Color;
    this.Age = Age;
    this.Coat = Coat;
}

var Spike = new Dog("Chihuahua", "brown", 5, "short hair");
var Duke = new Dog("German Shepard", "tan", 8, "long hair");
function Pet(){
document.getElementById("New_and_This").innerHTML=
"Spike is " + Spike.Age + " year old " + Spike.Color +   " "  +  Spike.Breed + " with " + Spike.Coat;
}
var counter = 0;
function add_function(){
    document.getElementById("adding").innerHTML = add();
    function add() {
        //var counter = 0;
        function plus() {counter += 1;}
        plus();  
        return counter; 

    }
}

   