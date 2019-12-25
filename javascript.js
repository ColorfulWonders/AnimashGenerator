var characters = [
  {name: "Adult Nala", age: "adult", gender: "female", role: "main", species: "big cat"}, 
  {name: "Young Nala", age: "young", gender: "female", role: "main", species: "big cat"},  
  {name: "Adult Kiara", age: "adult", gender: "female", role: "main", species: "big cat"}, 
  {name: "Young Kiara", age: "young", gender: "female", role: "main", species: "big cat"}, 
  {name: "Sarafina", age: "adult", gender: "female", role: "background", species: "big cat"}, 
  {name: "Sarabi", age: "adult", gender: "female", role: "side", species: "big cat"}, 
  {name: "Adult Vitani", age: "adult", gender: "female", role: "side", species: "big cat"}, 
  {name: "Young Vitani", age: "young", gender: "female", role: "side", species: "big cat"}, 
  {name: "Zira", age: "adult", gender: "female", role: "main", species: "big cat"},
  {name: "Adult Aleu", age: "adult", gender: "female", role: "main", species: "canine"}, 
  {name: "Young Aleu", age: "young", gender: "female", role: "main", species: "canine"}, 
  {name: "Jenna", age: "adult", gender: "female", role: "main", species: "canine"}, 
  {name: "Adult Faline", age: "adult", gender: "female", role:"side", species: "hoofmam"}, 
  {name: "Young Faline", age: "young", gender: "female", role:"side", species: "hoofmam"}, 
  {name: "Vixey", age: "adult", gender: "female", role:"side", species: "misc"}, 
  {name: "Adult Lady", age: "adult", gender: "female", role:"main", species: "canine"}, 
  {name: "Young Lady", age: "young", gender: "female", role:"main", species: "canine"}, 
  {name: "Angel", age: "young", gender: "female", role:"main", species: "canine"},
  {name: "Duchess", age: "adult", gender: "female", role:"main", species: "domecat"}, 
  {name: "Perdita", age: "adult", gender: "female", role:"main", species: "canine"}, 
  {name: "Dixie", age: "adult", gender: "female", role:"main", species: "canine"},
  {name: "Rita", age: "adult", gender: "female", role:"main", species: "canine"}, 
  {name: "Sasha", age: "adult", gender: "female", role:"main", species: "canine"}, 
  {name: "Georgette", age: "adult", gender: "female", role:"main", species: "canine"},
  {name: "Nita", age: "adult", gender: "female", role:"main", species: "misc"}, 
  {name: "Adult Simba", age: "adult", gender: "male", role:"main", species: "big cat"}, 
  {name: "Young Simba", age: "young", gender: "male", role:"main", species: "big cat"}, 
  {name: "Adult Kovu", age: "adult", gender: "male", role:"main", species: "big cat"},
  {name: "Young Kovu", age: "young", gender: "male", role:"main", species: "big cat"}, 
  {name: "Nuka", age: "adult", gender: "male", role:"side", species: "big cat"}, 
  {name: "Mufasa", age: "adult", gender: "male", role:"side", species: "big cat"}, 
  {name: "Kenai", age: "adult", gender: "male", role:"main", species: "misc"}, 
  {name: "Koda", age: "young", gender: "male", role:"main", species: "misc"}, 
  {name: "The Great Prince", age: "adult", gender: "male", role:"main", species: "hoofmam"}, 
  {name: "Adult Bambi", age: "adult", gender: "male", role:"main", species: "hoofmam"}, 
  {name: "Young Bambi", age: "young", gender: "male", role:"main", species: "hoofmam"}, 
  {name: "Adult Spirit", age: "adult", gender: "male", role:"main", species: "hoofmam"}, 
  {name: "Young Spirit", age: "young", gender: "male", role:"main", species: "hoofmam"}, 
  {name: "Adult Tod", age: "adult", gender: "male", role:"main", species: "misc"}, 
  {name: "Young Tod", age: "young", gender: "male", role:"main", species: "misc"}, 
  {name: "Adult Copper", age: "adult", gender: "male", role:"main", species: "canine"}, 
  {name: "Young Copper", age: "young", gender: "male", role:"main", species: "canine"}, 
  {name: "Balto", age: "adult", gender: "male", role:"main", species: "canine"}, 
  {name: "Steele", age: "adult", gender: "male", role:"main", species: "canine"},
  {name: "Thomas O'Malley", age: "adult", gender: "male", role:"main", species: "domecat"},
  {name: "Pongo", age: "adult", gender: "male", role:"main", species: "canine"}, 
  {name: "Patch", age: "young", gender: "male", role:"main", species: "canine"}, 
  {name: "Charlie", age: "adult", gender: "male", role:"main", species: "canine"},
  {name: "Itchy", age: "adult", gender: "male", role:"side", species: "canine"}, 
  {name: "Dodger", age: "adult", gender: "male", role:"main", species: "canine"}, 
  {name: "Tito", age: "adult", gender: "male", role:"side", species: "canine"},
  {name: "Buster", age: "adult", gender: "male", role:"main", species: "canine"}, 
  {name: "Cash", age: "adult", gender: "male", role:"main", species: "canine"}, 
  {name: "Tramp", age: "adult", gender: "male", role:"main", species: "canine"}, 
  {name: "Francis", age: "adult", gender: "male", role:"main", species: "domecat"}, 
  {name: "Scamp", age: "young", gender: "male", role:"main", species: "canine"}, 
  {name: "Bagheera", age: "adult", gender: "male", role:"main", species: "bigcat"},
  {name: "Oliver", age: "young", gender: "male", role:"main", species: "domecat"}];

var youngchars = characters.filter(function (el) {
    return (el.age === "young");     
});

var adultchars = characters.filter(function (el) {
    return (el.age === "adult");     
});
  
var mchars = characters.filter(function (el)) {
    return (el.gender === "male");                               
                               
}};

var fchars = characters.filter(function (el)) {
    return (el.gender === "female");                               
                               
}};

var mainchars = characters.filter(function (el)) {
    return (el.role === "main");                               
                               
}};

var sidechars = characters.filter(function (el)) {
    return (el.role === "side");                               
                               
}};

var bgchars = characters.filter(function (el)) {
    return (el.role === "background");                               
                               
}};

var caninechars = characters.filter(function (el)) {
    return (el.species === "canine");                               
                                                                                       
}};

var domecatchars = characters.filter(function (el)) {
    return (el.species === "domecat");                               
                               
}};

var bigcatchars = characters.filter(function (el)) {
    return (el.species === "bigcat");                               
                               
}};

var hoofmamchars = characters.filter(function (el)) {
    return (el.species === "hoofmam");                               
                               
}};

var smallmamchars = characters.filter(function (el)) {
    return (el.species === "smallmam");                               
                               
}};

var birdchars = characters.filter(function (el)) {
    return (el.species === "bird");                               
                               
}};

var miscchars = characters.filter(function (el)) {
    return (el.species === "misc");                               
                               
}};

var youngm = characters.filter(function (el) {
  return (el.gender === "male" && (el.age === "young" || el.age === "both"));
});
 
var youngf = characters.filter(function (el) {
  return (el.gender === "female" && (el.age === "young" || el.age === "both"));
});


var adultm = characters.filter(function (el) {
  return (el.gender === "male" && (el.age === "adult" || el.age === "both"));
});

var adultf = characters.filter(function (el) {
  return (el.gender === "female" && (el.age === "adult" || el.age === "both"));
});
  

var i = 1;

document.getElementById("newship").addEventListener("click", newPairing);




function newPairing() {


 
     document.getElementById('xx').style.display = "inline-block";

   
            if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === false && $("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false && $("#femaleOp2").is(':checked') === false && $("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === false && $("#maleOp2").is(':checked') === false) {
                        alert("check some boxes dude");}

           else if ($("#femaleOp2").is(':checked') === false && $("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === false && $("#maleOp2").is(':checked') === false) {
                        alert("Please choose genders for your characters.");}

           else if (($("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === false) && ($("#femaleOp2").is(':checked') === true || $("#maleOp2").is(':checked') === true)) {
                        alert("Please choose gender(s) for character #1.");}
      
           else if (($("#femaleOp1").is(':checked') === true || $("#maleOp1").is(':checked') === true) && ($("#femaleOp2").is(':checked') === false && $("#maleOp2").is(':checked') === false)) {
                        alert("Please choose gender(s) for character #2.");}
  
           else if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === false && $("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false) {
                        alert("Please choose ages for your characters.");}
    
           else if (($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === false) && ($("#youngOp2").is(':checked') === true || $("#adultOp2").is(':checked') === true)) {
                        alert("Please choose age(s) for character #1.");}
      
           else if (($("#youngOp1").is(':checked') === true || $("#adultOp1").is(':checked') === true) && ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false)) {
                        alert("Please choose age(s) for character #2.");}
             
           else if (($("#youngOp1").is(':checked') === true || $("#adultOp1").is(':checked') === true) && ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false)) {
                        alert("Please choose role(s) for character #1.");}
  
           else if (($("#youngOp1").is(':checked') === true || $("#adultOp1").is(':checked') === true) && ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false)) {
                        alert("Please choose roles(s) for character #2.");} 
            
           else if (($("#youngOp1").is(':checked') === true || $("#adultOp1").is(':checked') === true) && ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false)) {
                        alert("Please choose roles(s) for character #2.");}
  
           else if (($("#youngOp1").is(':checked') === true || $("#adultOp1").is(':checked') === true) && ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false)) {
                        alert("Please choose species for character #1.");}
  
           else if (($("#youngOp1").is(':checked') === true || $("#adultOp1").is(':checked') === true) && ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === false)) {
                        alert("Please choose species for character #2.");}
