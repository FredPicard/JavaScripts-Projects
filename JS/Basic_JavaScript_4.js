 function my_Dictionary() {
    var Car = {
        Make:"Subaru",
        Model:"CrossTrek",
         Color:"Black",
         Year: 2018,
         Transmision:"AutoMatic",
         Style:"Wagon"
     };
     document.getElementById("Dictionary").innerHTML = Car.Model;
}
function my_Dictionary() {
    var Car = {
        Make:"Subaru",
        Model:"CrossTrek",
         Color:"Black",
         Year: 2018,
         Transmision:"AutoMatic",
         Style:"Wagon"
     };
     delete Car.Model
     document.getElementById("Dictionary").innerHTML = Car.Model;
}
