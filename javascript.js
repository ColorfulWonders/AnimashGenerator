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
  {name: "Dixie (FATH2)", age: "adult", gender: "female", role:"main", species: "canine"},
  {name: "Dixie (Balto)", age: "adult", gender: "female", role:"side", species: "canine"},
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
  {name: "Francis (Felidae)", age: "adult", gender: "male", role:"main", species: "domecat"}, 
  {name: "Francis (OAC)", age: "adult", gender: "male", role:"side", species: "canine"}, 
  {name: "Scamp", age: "young", gender: "male", role:"main", species: "canine"}, 
  {name: "Bagheera", age: "adult", gender: "male", role:"main", species: "bigcat"},
  {name: "Oliver", age: "young", gender: "male", role:"main", species: "domecat"},
  {name: "Zazu", age: "adult", gender: "male", role: "side", species: "bird"},
  {name: "Timon", age: "adult", gender: "male", role: "side", species: "smallmam"},
  {name: "Pumba", age: "adult", gender: "male", role: "side", species: "hoofmam"},
  {name: "Rafiki", age: "adult", gender: "male", role: "side", species: "misc"},
  {name: "Kodi", age: "adult", gender: "male", role: "main", species: "canine"},
  {name: "Dusty", age: "adult", gender: "female", role: "side", species: "canine"},
  {name: "Kirby", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Borisv(Balto)", age: "adult", gender: "male", role: "side", species: "bird"},
  {name: "Jock", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Trusty", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Peg", age: "adult", gender: "female", role: "side", species: "canine"},  
  {name: "Kaltag", age: "adult", gender: "male", role: "side", species: "canine"},    
  {name: "Background wolf", age: "adult", gender: "female, male", role: "background", species: "canine"},  
  {name: "Niju", age: "adult", gender: "male", role: "side", species: "canine"},  
  {name: "Sylvie", age: "adult", gender: "female", role: "side", species: "canine"},  
  {name: "Muk", age: "adult", gender: "male", role: "side", species: "misc"},  
  {name: "Luk", age: "adult", gender: "male", role: "side", species: "misc"},  
  {name: "Aniu", age: "adult", gender: "female", role: "side", species: "canine"},       
  {name: "Nava", age: "elder", gender: "male", role: "side", species: "canine"},
  {name: "Mel", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Dipsy", age: "adult", gender: "female", role: "side", species: "canine"},
  {name: "Nikki", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Ralph", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Star", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Muru", age: "adult", gender: "male", role: "side", species: "smallmam"},
  {name: "Stella", age: "adult", gender: "female", role: "side", species: "bird"},
  {name: "Ralph", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Bambi's mom", age: "adult", gender: "female", role: "side", species: "hoofmam"},
  {name: "Mena", age: "adult", gender: "female", role: "side", species: "hoofmam"},
  {name: "Friend Owl", age: "adult", gender: "male", role: "side", species: "bird"},
  {name: "Young Thumper", age: "young", gender: "male", role: "side", species: "smallmam"},
  {name: "Adult Thumper", age: "adult", gender: "male", role: "side", species: "smallmam"},
  {name: "Young Flower", age: "young", gender: "male", role: "side", species: "smallmam"},
  {name: "Adult Flower", age: "adult", gender: "male", role: "side", species: "smallmam"},
  {name: "Mrs. Hare (Thumpers mom)", age: "adult", gender: "female", role: "side", species: "smallmam"},
  {name: "Miss Bunny", age: "adult", gender: "female", role: "side", species: "smallmam"},
  {name: "Thumper's sisters", age: "young", gender: "female", role: "side", species: "smallmam"},
  {name: "Miss Skunk", age: "adult", gender: "female", role: "side", species: "smallmam"},
  {name: "Chief", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Sparky", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Francois", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Mooch", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Scamps's sisters", age: "young", gender: "female", role: "side", species: "canine"},  
  {name: "Big Mama", age: "adult", gender: "female", role: "side", species: "bird"},
  {name: "Dinky", age: "adult", gender: "male", role: "side", species: "bird"},
  {name: "Boomer", age: "adult", gender: "male", role: "side", species: "bird"},
  {name: "Waylon and Floyd", age: "adult", gender: "female", role: "side", species: "canine"},
  {name: "Granny Rose", age: "elder", gender: "female", role: "side", species: "canine"},
  {name: "Zelda", age: "adult", gender: "female", role: "side", species: "domecat"},
  {name: "Colonel", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Sergeant Tibbs", age: "adult", gender: "male", role: "side", species: "domecat"},
  {name: "Captain", age: "adult", gender: "male", role: "side", species: "hoofmam"},
  {name: "Thunderbolt", age: "adult", gender: "male", role: "main", species: "canine"},
  {name: "Lil' Lightning", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Rolly", age: "young", gender: "male", role: "side", species: "canine"},
  {name: "Penny", age: "young", gender: "female", role: "side", species: "canine"},
  {name: "Max", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Flo", age: "adult", gender: "female", role: "side", species: "canine"},
  {name: "Annabelle", age: "adult", gender: "female", role: "side", species: "canine"},
  {name: "Belladona", age: "adult", gender: "female", role: "side", species: "canine"},
  {name: "Carface", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Killer", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Toughy", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Bull", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Boris (LATT)", age: "adult", gender: "male", role: "side", species: "canine"},
  {name: "Mr. Busy", age: "adult", gender: "male", role: "side", species: "smallmam"},
  {name: "Uncle Waldo", age: "adult", gender: "male", role: "side", species: "bird"},
  {name: "Abigail and Amelia Gabble", age: "adult", gender: "female", role: "side", species: "bird"},
  {name: "Scat Cat", age: "adult", gender: "male", role: "side", species: "domecat"},
  {name: "Hit Cat", age: "adult", gender: "male", role: "side", species: "domecat"},
  {name: "Roquefort", age: "adult", gender: "male", role: "side", species: "smallmam"},
  {name: "Frou-Frou", age: "adult", gender: "female", role: "side", species: "hoofmam"},
  {name: "Berlioz", age: "young", gender: "male", role: "main", species: "domecat"},
  {name: "Marie", age: "young", gender: "female", role: "main", species: "domecat"},
  {name: "Toulouse", age: "young", gender: "male", role: "main", species: "domecat"},
  {name: "Tug", age: "adult", gender: "male", role: "side", species: "misc"},
  {name: "Rutt and Tuke", age: "adult", gender: "male", role: "side", species: "hoofmam"},
  {name: "Anda and Kata", age: "adult", gender: "female", role: "side", species: "hoofmam"},
  {name: "Einstein", age: "adult", gender: "male", role: "side", species: "canine"},  
  {name: "Roscoe and DeSoto", age: "adult", gender: "male", role: "side", species: "canine"},      
  {name: "Totem Fox", age: "adult", gender: "female", role: "side", species: "misc"},  
  {name: "Peg", age: "adult", gender: "female", role: "side", species: "canine"},  
  {name: "Peg", age: "adult", gender: "female", role: "side", species: "canine"},  
  {name: "Peg", age: "adult", gender: "female", role: "side", species: "canine"},  
  {name: "Peg", age: "adult", gender: "female", role: "side", species: "canine"},  
  {name: "Peg", age: "adult", gender: "female", role: "side", species: "canine"},  
  
];


  {name: "Maggie", age: "adult", gender: "female", role: "main", species: "hoofmam"},  
  {name: "Grace", age: "adult", gender: "female", role: "main", species: "hoofmam"},  
  {name: "Mrs. Calloway", age: "adult", gender: "female", role: "main", species: "hoofmam"},  
  {name: "Rusty", age: "elder", gender: "male", role: "side", species: "canine"},  
  {name: "Lucky Jack", age: "adult", gender: "male", role: "side", species: "smallmam"},  
  {name: "Buck", age: "adult", gender: "male", role: "side", species: "hoofmam"},


felidae: exoctic cat, felicity,
home on the range: all of em
Spirit: mama horse, other horses i guess?
american tial: all of em
secret of nimh: all of em
rescusers: all of em
Tarzan: all of em
Dumbo: all of em
Cat from panocio
Horse from mulan
Emo garfield
max tlm
add bg puppy from start of latt2
group/duo characters are grouped together


// [adjective] [character] and [character] with [coloring] coloring, [effects] effects and [music] music

//adjective: romantic, cute, polyamourus, plantonic, fun, familial, (parent child), (siblings), emtional, sad, angsty, humorous, happy, scary, dramatic, seasonal, adventurous, magical, classy, floral, phycodeslic, city-themed, nature-themed, candy-themed, food-themed, video game-themed, board game-themed, beach-themed, ocean-themed, space-themed, cartoon-themed, anime-themed, fashion-themed, 70s-themed, 80s-themed, 90s-themed, 2000s-themed 
//colorings: raw, red, orange, yellow, light green, dark green, light blue, dark blue, purple, brown, hot pink, pink, pastel, neon, warm, cool, neutrual, gold, silver, gray, black and white, rainbow,
//effects: no, mirror, zoom, color inverting, candy style, vhs, film roll, glitch, letterbox, high contrast, chroma key, time-bending, cookie cutter, blur, glow, smoke, cartoon, sparkle, half tone, shaking, tile, threshold, pixelate, texture, wave
//music: no, instramental, non-english lanuage, acapeela, video game, movie score, soundtrack, experimental, Lo-fi, blues, R&B, country, EDM, disco, dubstep, hip hop, trap, crunk, techno, nightcore, folk, jazz, pop, punk, classical, psychedelic, emo, rock, indie, ska, nightcore, parody





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
  
  
  
  
  
    if ($("#femaleOp1").is(':checked') === true && $("#maleOp1").is(':checked') === true) {  
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === false) {
                  var randomNumber = Math.floor(Math.random() * (youngchars.length));
                if (youngchars[randomNumber].age === "both") {
                  document.getElementById('char1Display').innerHTML = "Young " + youngchars[randomNumber].name;}
                else if (youngchars[randomNumber].age === "young") {
                  document.getElementById('char1Display').innerHTML = youngchars[randomNumber].name;}}
      
      /*  */
            if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === true) {
                  var randomNumber2 = Math.floor(Math.random() * (adultchars.length));
                  document.getElementById('char1Display').innerHTML = adultchars[randomNumber2].name;}
      
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === true) {
                  var randomNumber3 = Math.floor(Math.random() * (characters.length));
                  document.getElementById('char1Display').innerHTML = characters[randomNumber3].name;}
      
    }
          else if ($("#femaleOp1").is(':checked') === false && $("#maleOp1").is(':checked') === true) {
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === false) {
            var randomNumber4 = Math.floor(Math.random() * (youngm.length));
                if (youngm[randomNumber4].age === "both") {
                  document.getElementById('char1Display').innerHTML = "Young " + youngm[randomNumber4].name;}
                else if (youngm[randomNumber4].age === "young") {
                  document.getElementById('char1Display').innerHTML = youngm[randomNumber4].name;}}
            else if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === true) {
            var randomNumber7 = Math.floor(Math.random() * (adultm.length));
                  document.getElementById('char1Display').innerHTML = adultm[randomNumber7].name;}}
              
          else if ($("#femaleOp1").is(':checked') === true && $("#maleOp1").is(':checked') === false) {
            if ($("#youngOp1").is(':checked') === true && $("#adultOp1").is(':checked') === false) {
            var randomNumber5 = Math.floor(Math.random() * (youngf.length));
                if (youngf[randomNumber5].age === "both") {
                  document.getElementById('char1Display').innerHTML = "Young " + youngf[randomNumber5].name;}
                else if (youngf[randomNumber5].age === "young") {
                  document.getElementById('char1Display').innerHTML = youngf[randomNumber5].name;}}
            else if ($("#youngOp1").is(':checked') === false && $("#adultOp1").is(':checked') === true) {
            var randomNumber6 = Math.floor(Math.random() * (adultf.length));
                  document.getElementById('char1Display').innerHTML = adultf[randomNumber6].name;}}
  
    if ($("#femaleOp2").is(':checked') === true && $("#maleOp2").is(':checked') === true) {  
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === false) {
                  var randomNumber8 = Math.floor(Math.random() * (youngchars.length));
                if (youngchars[randomNumber8].age === "both") {
                  document.getElementById('char2Display').innerHTML = "Young " + youngchars[randomNumber8].name;}
                else if (youngchars[randomNumber8].age === "young") {
                  document.getElementById('char2Display').innerHTML = youngchars[randomNumber8].name;}}
      
      /*  */
            if ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === true) {
                  var randomNumber9 = Math.floor(Math.random() * (adultchars.length));
                  document.getElementById('char2Display').innerHTML = adultchars[randomNumber9].name;}
      
      
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === true) {
                  var randomNumber10 = Math.floor(Math.random() * (characters.length));
                  document.getElementById('char2Display').innerHTML = characters[randomNumber10].name;}
      
    }
          else if ($("#femaleOp2").is(':checked') === false && $("#maleOp2").is(':checked') === true) {
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === false) {
            var randomNumber11 = Math.floor(Math.random() * (youngm.length));
                if (youngm[randomNumber11].age === "both") {
                  document.getElementById('char2Display').innerHTML = "Young " + youngm[randomNumber11].name;}
                else if (youngm[randomNumber11].age === "young") {
                  document.getElementById('char2Display').innerHTML = youngm[randomNumber11].name;}}
            else if ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === true) {
            var randomNumber12 = Math.floor(Math.random() * (adultm.length));
                  document.getElementById('char2Display').innerHTML = adultm[randomNumber12].name;}}
          
              
              
          else if ($("#femaleOp2").is(':checked') === true && $("#maleOp2").is(':checked') === false) {
            if ($("#youngOp2").is(':checked') === true && $("#adultOp2").is(':checked') === false) {
            var randomNumber13 = Math.floor(Math.random() * (youngf.length));
                if (youngf[randomNumber13].age === "both") {
                  document.getElementById('char2Display').innerHTML = "Young " + youngf[randomNumber13].name;}
                else if (youngf[randomNumber13].age === "young") {
                  document.getElementById('char2Display').innerHTML = youngf[randomNumber13].name;}}
            else if ($("#youngOp2").is(':checked') === false && $("#adultOp2").is(':checked') === true) {
            var randomNumber14 = Math.floor(Math.random() * (adultf.length));
                  document.getElementById('char2Display').innerHTML = adultf[randomNumber14].name;}}


}
